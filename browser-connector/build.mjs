import { readFile, mkdir, writeFile, rm, copyFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { zipSync } from 'fflate';
import { hostPattern } from '../src/functions/hoyoverseProtocol.js';

const root = dirname(fileURLToPath(import.meta.url));
const development = process.argv.includes('--dev');
const origins = ['https://paimon.moe', 'https://www.paimon.moe'];
if (development) origins.push('http://localhost:3000', 'http://127.0.0.1:3000');
const output = resolve(root, development ? 'dist-dev' : 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const source = async (file) =>
  (await readFile(resolve(root, file), 'utf8')).replace(/^import[\s\S]*? from .*;\n/gm, '').replace(/^export /gm, '');
const protocol = await source('../src/functions/hoyoverseProtocol.js');
for (const target of ['chromium', 'firefox']) {
  const directory = resolve(output, target);
  await mkdir(directory);
  const manifest = {
    manifest_version: 3,
    name: 'Paimon.moe HoYoverse Connector (Preview)',
    version: '0.1.2',
    description: 'Import Genshin wishes using your signed-in HoYoverse browser session.',
    host_permissions: ['https://api-account-os.hoyoverse.com/*', ...origins.map(hostPattern)],
    action: { default_title: 'Enable Paimon.moe connector' },
    content_scripts: [{ matches: origins.map(hostPattern), js: ['content.js'], run_at: 'document_idle' }],
    ...(target === 'chromium'
      ? { background: { service_worker: 'background.js' }, minimum_chrome_version: '109' }
      : {
          background: { scripts: ['background.js'] },
          browser_specific_settings: {
            gecko: {
              id: 'hoyoverse-connector@paimon.moe',
              strict_min_version: '142.0',
              data_collection_permissions: { required: ['authenticationInfo', 'websiteActivity'] },
            },
          },
        }),
  };
  await writeFile(resolve(directory, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  await writeFile(
    resolve(directory, 'content.js'),
    `const CONNECTOR_ORIGINS = ${JSON.stringify(origins)};\n` + protocol + '\n' + (await source('content.js')),
  );
  await writeFile(
    resolve(directory, 'background.js'),
    `const CONNECTOR_ORIGINS = ${JSON.stringify(origins)};\n` +
      protocol +
      '\n' +
      (await source('background.js')) +
      '\n' +
      (await source('entry.js')),
  );
  await copyFile(resolve(root, 'setup.html'), resolve(directory, 'setup.html'));
  await writeFile(
    resolve(directory, 'setup.js'),
    `const CONNECTOR_ORIGINS = ${JSON.stringify(origins)};\n` + protocol + '\n' + (await source('setup.js')),
  );
  const archive = resolve(output, `paimon-hoyoverse-${target}.zip`);
  await copyFile(resolve(root, '../LICENSE'), resolve(directory, 'LICENSE'));
  const files = {};
  for (const name of (await readdir(directory)).sort()) {
    files[name] = [await readFile(resolve(directory, name)), { mtime: new Date('2020-01-01T00:00:00Z') }];
  }
  await writeFile(archive, zipSync(files, { level: 9 }));
  const assets = resolve(root, '../static/browser-connector');
  await mkdir(assets, { recursive: true });
  await copyFile(archive, resolve(assets, `${target}.zip`));
}
console.log(`Built preview connectors: ${output}`);
