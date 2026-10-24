// Optional native Firefox/LibreWolf smoke test. Requires geckodriver on PATH.
// Only the disposable extension fixture replaces HoYoverse fetch responses.
import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { unzipSync, zipSync, strToU8 } from 'fflate';

const base = process.env.PAIMON_TEST_URL || 'http://localhost:3000';
const pause = () => new Promise((resolve) => setTimeout(resolve, 100));
async function until(fn, timeout = 20000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    const result = await fn();
    if (result) return result;
    await pause();
  }
  throw new Error('Timed out waiting for native Firefox connector response');
}

test('native Firefox injects the localhost bridge and reports a signed-out session', { timeout: 60000 }, async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  await new Promise((resolve) => server.close(resolve));
  const directory = await mkdtemp(join(tmpdir(), 'paimon-firefox-test-'));
  const files = unzipSync(await readFile(resolve('browser-connector/dist-dev/paimon-hoyoverse-firefox.zip')));
  files['background.js'] = strToU8(
    'self.fetch = async () => ({ ok: true, json: async () => ({ retcode: -100 }) });\n' +
      new TextDecoder().decode(files['background.js']),
  );
  const addon = join(directory, 'connector.zip');
  await writeFile(addon, zipSync(files));
  const driver = spawn(
    process.env.GECKODRIVER_PATH || 'geckodriver',
    ['--host', '127.0.0.1', '--port', String(port), '--log', 'fatal'],
    {
      stdio: 'ignore',
    },
  );
  let spawnError;
  driver.on('error', (error) => {
    spawnError = error;
  });
  let session;
  async function command(method, path, data) {
    const response = await fetch(`http://127.0.0.1:${port}${path}`, {
      method,
      ...(data ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) } : {}),
    });
    const body = await response.json();
    if (!response.ok) throw new Error(body.value?.message || `WebDriver status ${response.status}`);
    return body.value;
  }
  try {
    await until(async () => {
      if (spawnError) throw spawnError;
      try {
        await command('GET', '/status');
        return true;
      } catch {
        return false;
      }
    }, 10000);
    const started = await command('POST', '/session', {
      capabilities: {
        alwaysMatch: {
          browserName: 'firefox',
          'moz:firefoxOptions': {
            args: ['-headless'],
            ...(process.env.FIREFOX_BINARY ? { binary: process.env.FIREFOX_BINARY } : {}),
          },
        },
      },
    });
    session = started.sessionId;
    const prefix = `/session/${session}`;
    const execute = (script) => command('POST', prefix + '/execute/sync', { script, args: [] });
    await command('POST', prefix + '/moz/addon/install', { path: addon, temporary: true });
    await command('POST', prefix + '/url', { url: base + '/wish/import' });
    await until(() => execute('return !!window.localforage'));
    await execute(
      `Array.from(document.querySelectorAll('button')).find(b=>b.textContent.trim()==='HoYoverse account').click()`,
    );
    await until(() => execute(`return !!document.querySelector('[data-testid="hoyoverse-import"] button')`));
    await execute(
      `Array.from(document.querySelectorAll('button')).find(b=>b.textContent.trim()==='Connect HoYoverse').click()`,
    );
    const message = await until(() =>
      execute(`return document.querySelector('[data-testid="hoyoverse-import"] [role="alert"]')?.textContent || ''`),
    );
    assert.match(message, /Sign in to your HoYoverse account/);
    assert.doesNotMatch(message, /Connector not detected/);
    console.log(
      `Native Firefox ${started.capabilities.browserVersion}: localhost handshake and signed-out response passed`,
    );
  } finally {
    if (session) await command('DELETE', `/session/${session}`).catch(() => {});
    driver.kill();
    await rm(directory, { recursive: true, force: true });
  }
});
