// End-to-end UI tests with a real unpacked extension and synthetic HoYoverse data.
// Run the dev server first. No real credentials, proxy, or telemetry are used.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { chromium } from 'playwright';

const base = process.env.PAIMON_TEST_URL || 'http://localhost:3000';
const executablePath = process.env.CHROMIUM_PATH;
const extension = resolve('browser-connector/dist-dev/chromium');
const role = { game_uid: '700000001', region: 'os_euro', nickname: 'Browser Test' };
const row = {
  uid: role.game_uid,
  id: '10000000000001',
  gacha_type: '301',
  name: 'Debate Club',
  item_type: 'Weapon',
  rank_type: '3',
  time: '2026-10-20 12:00:00',
};
const options = { headless: true, ...(executablePath ? { executablePath } : {}), args: ['--no-sandbox'] };
const screenshot = async (page, name) => {
  if (!process.env.PAIMON_SCREENSHOTS) return;
  await mkdir(process.env.PAIMON_SCREENSHOTS, { recursive: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: join(process.env.PAIMON_SCREENSHOTS, `${name}.png`), fullPage: true });
};
async function openImporter(page) {
  await page.goto(`${base}/wish/import`, { waitUntil: 'domcontentloaded' });
  // Wait for Svelte hydration, not just the server-rendered buttons.
  await page.waitForFunction(() => !!window.localforage);
  await page.getByRole('button', { name: 'HoYoverse account', exact: true }).click();
}

// All external page traffic is blocked, including analytics, ads, Drive, and tally.
async function blockExternal(context) {
  await context.route('**/*', (route) =>
    new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort(),
  );
}

test(
  'connector → preview → Save → no new wishes; UID guards, SPA navigation, mobile layout',
  { timeout: 120000 },
  async () => {
    const directory = await mkdtemp(join(tmpdir(), 'paimon-connector-test-'));
    const context = await chromium.launchPersistentContext(directory, {
      ...options,
      args: [...options.args, `--disable-extensions-except=${extension}`, `--load-extension=${extension}`],
    });
    try {
      await blockExternal(context);
      const worker = context.serviceWorkers()[0] || (await context.waitForEvent('serviceworker'));
      await worker.evaluate((role) => {
        self.testCalls = [];
        self.testMode = 'success';
        self.fetch = async (url, options) => {
          self.testCalls.push({ path: new URL(url).pathname, credentials: options.credentials });
          if (self.testMode === 'signed-out') return { ok: true, json: async () => ({ retcode: -100 }) };
          return {
            ok: true,
            json: async () =>
              url.includes('getUserGameRoles')
                ? { retcode: 0, data: { list: [role] } }
                : { retcode: 0, data: { authkey: 'TEST%2BKEY%2F%3D' } },
          };
        };
      }, role);
      const page = await context.newPage();
      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      let proxyCalls = 0;
      await page.route('**/corsproxy', async (route) => {
        const url = new URL(route.request().postDataJSON().url);
        assert.equal(url.searchParams.get('authkey'), 'TEST+KEY/=');
        assert.equal(url.searchParams.get('region'), role.region);
        proxyCalls++;
        const list = url.searchParams.get('gacha_type') === '301' && url.searchParams.get('page') === '1' ? [row] : [];
        await route.fulfill({ json: { retcode: 0, data: { region: role.region, list } } });
      });
      await page.route('**/news/wish', (route) => route.fulfill({ json: { message: '' } }));
      await openImporter(page);
      const panel = page.getByTestId('hoyoverse-import');
      assert.equal(await page.getByText('The old android method', { exact: false }).count(), 0);
      await panel.getByRole('button', { name: 'Connect HoYoverse', exact: true }).click();
      await page.getByRole('status').filter({ hasText: 'Character list loaded' }).waitFor();
      assert.ok(
        (await page.getByLabel('Genshin character').locator('option:checked').innerText()).includes(role.game_uid),
      );
      await screenshot(page, 'hoyoverse-connected-desktop');
      await page.getByRole('button', { name: 'Import', exact: true }).click();
      await page.getByRole('button', { name: 'Save', exact: true }).waitFor({ timeout: 40000 });
      assert.equal(proxyCalls, 6);
      await screenshot(page, 'hoyoverse-preview');
      await page.getByRole('button', { name: 'Save', exact: true }).click();
      await page.waitForURL(`${base}/wish`);
      await page.getByRole('button', { name: 'Close', exact: true }).click();
      const saved = await page.evaluate(async () => {
        const { readSave, getLocalSaveJson } = await import('/src/stores/saveManager.js');
        return {
          uid: await readSave('wish-uid'),
          wishes: await readSave('wish-counter-character-event'),
          backup: await getLocalSaveJson(),
        };
      });
      assert.equal(saved.uid, role.game_uid);
      assert.equal(saved.wishes.pulls.length, 1);
      assert.equal(saved.backup.includes('TEST+KEY/='), false);
      assert.equal(saved.backup.includes('authkey'), false);

      // SPA navigation: the content script must remain usable without a document reload.
      await page.evaluate(async () => {
        const { goto } = await import('/.svelte-kit/runtime/app/navigation.js');
        await goto('/wish/import');
      });
      await page.getByRole('button', { name: 'HoYoverse account', exact: true }).click();
      await page.getByRole('button', { name: 'Connect HoYoverse', exact: true }).click();
      await page.getByRole('status').filter({ hasText: 'Character list loaded' }).waitFor();
      await page.getByRole('button', { name: 'Import', exact: true }).click();
      await page.getByText('There are no new wishes', { exact: false }).waitFor({ timeout: 40000 });
      await page.getByRole('button', { name: 'Cancel', exact: true }).last().click();

      await page.evaluate(async () => {
        const { updateSave } = await import('/src/stores/saveManager.js');
        await updateSave('wish-uid', '700000002');
      });
      const beforeMismatch = await worker.evaluate(() => self.testCalls.length);
      await page.getByRole('button', { name: 'Import', exact: true }).click();
      await page.getByText('The selected character does not match', { exact: false }).waitFor();
      assert.equal(await worker.evaluate(() => self.testCalls.length), beforeMismatch);

      await page.setViewportSize({ width: 390, height: 844 });
      await panel.getByText('How to install this preview', { exact: true }).click();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await screenshot(page, 'hoyoverse-mobile-instructions');
      await worker.evaluate(() => {
        self.testMode = 'signed-out';
      });
      await page.getByRole('button', { name: 'Connect HoYoverse', exact: true }).click();
      await page.getByRole('alert').filter({ hasText: 'Sign in to your HoYoverse account' }).waitFor();
      assert.ok(await page.getByRole('button', { name: 'Import', exact: true }).isDisabled());
      assert.deepEqual(pageErrors, []);
    } finally {
      await context.close();
      await rm(directory, { recursive: true, force: true });
    }
  },
);

test(
  'missing extension has installation instructions and leaves other methods usable',
  { timeout: 30000 },
  async () => {
    const browser = await chromium.launch(options);
    try {
      const context = await browser.newContext();
      await blockExternal(context);
      const page = await context.newPage();
      await openImporter(page);
      await page.getByRole('button', { name: 'Connect HoYoverse', exact: true }).click();
      await page.getByRole('alert').filter({ hasText: 'Connector not detected' }).waitFor();
      assert.ok(await page.getByRole('button', { name: 'Import', exact: true }).isDisabled());
      await page.getByRole('button', { name: 'PC', exact: true }).click();
      assert.ok(await page.getByRole('button', { name: 'Import', exact: true }).isEnabled());
    } finally {
      await browser.close();
    }
  },
);

test(
  'multiple characters, auth cancellation, failed banner, and existing URL/force-update backup',
  { timeout: 120000 },
  async () => {
    const directory = await mkdtemp(join(tmpdir(), 'paimon-connector-regression-'));
    const context = await chromium.launchPersistentContext(directory, {
      ...options,
      args: [...options.args, `--disable-extensions-except=${extension}`, `--load-extension=${extension}`],
    });
    try {
      await blockExternal(context);
      const worker = context.serviceWorkers()[0] || (await context.waitForEvent('serviceworker'));
      await worker.evaluate((role) => {
        self.authStarted = false;
        self.mode = 'delay-key';
        self.fetch = async (url, options) => {
          if (url.includes('getUserGameRoles'))
            return {
              ok: true,
              json: async () => ({
                retcode: 0,
                data: {
                  list: [role, { ...role, game_uid: '800000001', region: 'os_usa', nickname: 'Second Character' }],
                },
              }),
            };
          self.authStarted = true;
          if (self.mode === 'delay-key')
            return new Promise((resolve, reject) => {
              options.signal.addEventListener('abort', () => reject(new Error('Abort')), { once: true });
            });
          return { ok: true, json: async () => ({ retcode: 0, data: { authkey: 'TEST%2BKEY%2F%3D' } }) };
        };
      }, role);
      const page = await context.newPage();
      let failBanner = true;
      await page.route('**/corsproxy', async (route) => {
        const url = new URL(route.request().postDataJSON().url);
        if (failBanner && url.searchParams.get('gacha_type') === '302') {
          return route.fulfill({ json: { retcode: -1, data: null, message: 'fixture failure' } });
        }
        const list =
          url.searchParams.get('gacha_type') === '301' && url.searchParams.get('page') === '1'
            ? [{ ...row, uid: '800000001' }]
            : [];
        await route.fulfill({ json: { retcode: 0, data: { region: 'os_usa', list } } });
      });
      await page.route('**/news/wish', (route) => route.fulfill({ json: { message: '' } }));
      await openImporter(page);
      await page.getByRole('button', { name: 'Connect HoYoverse', exact: true }).click();
      await page.getByRole('status').filter({ hasText: 'Character list loaded' }).waitFor();
      assert.ok(await page.getByRole('button', { name: 'Import', exact: true }).isDisabled());
      await page.getByLabel('Genshin character').selectOption({ index: 2 });
      await page.getByRole('button', { name: 'Import', exact: true }).click();
      for (let i = 0; i < 100 && !(await worker.evaluate(() => self.authStarted)); i++) {
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
      assert.ok(await worker.evaluate(() => self.authStarted));
      await page.getByRole('button', { name: 'Cancel', exact: true }).click();
      await page.getByRole('button', { name: 'Import', exact: true }).waitFor();
      await worker.evaluate(() => {
        self.mode = 'key';
      });
      await page.getByRole('button', { name: 'Import', exact: true }).click();
      await page.getByText("Error code returned from HoYoVerse's API", { exact: false }).waitFor({ timeout: 40000 });
      assert.equal(await page.getByRole('button', { name: 'Save', exact: true }).count(), 0);
      assert.equal(
        await page.evaluate(async () => {
          const { readSave } = await import('/src/stores/saveManager.js');
          return readSave('wish-counter-character-event');
        }),
        null,
      );

      // The existing URL path still works; Force update must download a backup first.
      failBanner = false;
      await page.evaluate(async () => {
        const { updateSave } = await import('/src/stores/saveManager.js');
        await updateSave('wish-uid', '800000001');
        await updateSave('wish-counter-character-event', {
          pulls: [{ type: 'weapon', code: '301', id: 'debate_club', time: '2026-10-21 12:00:00', pity: 1 }],
        });
      });
      await page.getByRole('button', { name: 'PC', exact: true }).click();
      await page.getByRole('button', { name: 'Manual', exact: true }).click();
      await page
        .getByRole('textbox')
        .fill(
          'https://public-operation-hk4e-sg.hoyoverse.com/gacha_info/api/getGachaLog?authkey=TEST%2BKEY%2F%3D&region=os_usa',
        );
      await page.getByRole('button', { name: 'Advanced import options' }).click();
      await page.getByRole('checkbox', { name: 'Force update wish history', exact: false }).check();
      await page.getByRole('checkbox', { name: 'Submit pity for global wish stats' }).uncheck();
      const downloaded = page.waitForEvent('download');
      await page.getByRole('button', { name: 'Import', exact: true }).click();
      const backup = await downloaded;
      assert.equal(backup.suggestedFilename(), 'paimon-moe-forceupdate-backup.json');
      let backupText = '';
      for await (const chunk of await backup.createReadStream()) backupText += chunk;
      assert.ok(backupText.includes('2026-10-21 12:00:00'));
      assert.equal(backupText.includes('authkey'), false);
      await page.getByRole('button', { name: 'Save', exact: true }).waitFor({ timeout: 40000 });
      assert.equal(
        await page.evaluate(async () => {
          const { readSave } = await import('/src/stores/saveManager.js');
          return (await readSave('wish-counter-character-event')).pulls[0].time;
        }),
        '2026-10-21 12:00:00',
      );
    } finally {
      await context.close();
      await rm(directory, { recursive: true, force: true });
    }
  },
);
