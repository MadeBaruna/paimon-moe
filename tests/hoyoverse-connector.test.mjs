import test from 'node:test';
import assert from 'node:assert/strict';
import { createConnectorHandler } from '../browser-connector/background.js';
import {
  validRequest,
  validResponse,
  PAGE_SOURCE,
  CONNECTOR_SOURCE,
  PROTOCOL,
} from '../src/functions/hoyoverseProtocol.js';

const origin = 'https://paimon.moe';
const sender = { url: origin + '/wish/import', origin, frameId: 0, tab: { id: 42, incognito: false } };
const role = { uid: '700000001', region: 'os_euro' };
const request = (type, extra = {}) => ({ source: PAGE_SOURCE, protocol: PROTOCOL, requestId: 'req-1', type, ...extra });
const rolesBody = {
  retcode: 0,
  data: { list: [{ game_uid: role.uid, region: role.region, nickname: 'Test', private: 'NEVER_FORWARD' }] },
};
const response = (json) => ({ ok: true, json: async () => json });

for (const [name, extra] of Object.entries({
  'wrong origin': { url: 'https://evil.example/wish/import', origin: 'https://evil.example' },
  'wrong route': { url: origin + '/wish' },
  subframe: { frameId: 2 },
  incognito: { tab: { id: 42, incognito: true } },
  container: { tab: { id: 42, cookieStoreId: 'firefox-container-1' } },
  'inconsistent origin': { origin: 'https://evil.example' },
  'no tab': { tab: undefined },
})) {
  test(`reject ${name} without network calls`, async () => {
    let calls = 0;
    const handler = createConnectorHandler({
      origins: [origin],
      fetchImpl: async () => {
        calls++;
      },
    });
    assert.equal((await handler(request('GET_ROLES'), { ...sender, ...extra })).code, 'UNSUPPORTED_CONTEXT');
    assert.equal(calls, 0);
  });
}

test('malformed, oversized, unsupported, and wrong-version requests are rejected', async () => {
  const handler = createConnectorHandler({ origins: [origin], fetchImpl: () => assert.fail('No network') });
  for (const value of [
    null,
    {},
    request('FETCH'),
    request('GET_ROLES', { protocol: 2 }),
    request('GET_ROLES', { requestId: 'x'.repeat(81) }),
    request('GET_ROLES', { extra: 'x'.repeat(32768) }),
    request('CREATE_AUTHKEY', { ...role, region: 'cn_gf01' }),
  ]) {
    assert.equal((await handler(value, sender)).code, 'INVALID_MESSAGE');
  }
});

test('return only role metadata and authkey; use fixed HoYoverse destinations', async () => {
  const calls = [];
  const handler = createConnectorHandler({
    origins: [origin],
    fetchImpl: async (url, options) => {
      calls.push({ url, options });
      return response(
        calls.length < 3 ? rolesBody : { retcode: 0, data: { authkey: 'key%2Bvalue%2F%3D', secret: 'NEVER_FORWARD' } },
      );
    },
  });
  const roles = await handler(request('GET_ROLES'), sender);
  assert.deepEqual(roles.roles, [{ ...role, nickname: 'Test' }]);
  const key = await handler(request('CREATE_AUTHKEY', { ...role, endpoint: 'https://evil.example' }), sender);
  assert.equal(key.authkey, 'key+value/=');
  assert.ok(validResponse(key));
  assert.equal(JSON.stringify([roles, key]).includes('NEVER_FORWARD'), false);
  assert.equal(calls.length, 3);
  for (const call of calls) {
    assert.equal(new URL(call.url).origin, 'https://api-account-os.hoyoverse.com');
    assert.equal(call.options.credentials, 'include');
    assert.equal(call.options.redirect, 'error');
    assert.equal('Cookie' in (call.options.headers || {}), false);
  }
  assert.deepEqual(JSON.parse(calls[2].options.body), {
    game_uid: role.uid,
    region: role.region,
    game_biz: 'hk4e_global',
    auth_appid: 'webview_gacha',
  });
});

test('revalidate current session membership before generating an authkey', async () => {
  let calls = 0;
  const handler = createConnectorHandler({
    origins: [origin],
    fetchImpl: async () => {
      calls++;
      return response(rolesBody);
    },
  });
  assert.equal((await handler(request('CREATE_AUTHKEY', { ...role, uid: '700000002' }), sender)).code, 'UID_MISMATCH');
  assert.equal(calls, 1);
});

test('upstream errors and arbitrary exceptions never expose response contents', async () => {
  for (const fetchImpl of [
    async () => response({ retcode: -100, data: { secret: 'NEVER_FORWARD' } }),
    async () => response({ retcode: -999, message: 'NEVER_FORWARD' }),
    async () => {
      throw new Error('NEVER_FORWARD');
    },
  ]) {
    const handler = createConnectorHandler({ origins: [origin], fetchImpl });
    const result = await handler(request('GET_ROLES'), sender);
    assert.ok(['NOT_SIGNED_IN', 'UPSTREAM_REJECTED', 'NETWORK_ERROR'].includes(result.code));
    assert.equal(JSON.stringify(result).includes('NEVER_FORWARD'), false);
  }
});

test('cancel by matching tab and request ID; reject overlapping operations', async () => {
  const handler = createConnectorHandler({
    origins: [origin],
    fetchImpl: async (_, { signal }) =>
      new Promise((resolve, reject) =>
        signal.addEventListener('abort', () => reject(new Error('Abort')), { once: true }),
      ),
  });
  const running = handler(request('GET_ROLES'), sender);
  assert.equal((await handler(request('GET_ROLES', { requestId: 'second' }), sender)).code, 'BUSY');
  await handler(request('CANCEL'), { ...sender, tab: { id: 43 } });
  assert.equal((await handler(request('GET_ROLES', { requestId: 'second' }), sender)).code, 'BUSY');
  await handler(request('CANCEL'), sender);
  assert.equal((await running).code, 'CANCELLED');
});

test('upstream timeout aborts the request and frees the operation slot', async () => {
  const handler = createConnectorHandler({
    origins: [origin],
    timeout: 10,
    fetchImpl: async (_, { signal }) =>
      new Promise((resolve, reject) =>
        signal.addEventListener('abort', () => reject(new Error('Abort')), { once: true }),
      ),
  });
  assert.equal((await handler(request('GET_ROLES'), sender)).code, 'TIMEOUT');
  assert.equal((await handler(request('GET_ROLES'), sender)).code, 'TIMEOUT');
});

test('malformed authkeys, invalid response roles, and unknown errors are rejected', () => {
  const base = { source: CONNECTOR_SOURCE, protocol: PROTOCOL, requestId: 'req-1' };
  assert.equal(validResponse({ ...base, type: 'AUTHKEY', ...role, authkey: 'x'.repeat(16385) }), false);
  assert.equal(validResponse({ ...base, type: 'ROLES', roles: [{ ...role, region: 'cn_gf01', nickname: '' }] }), false);
  assert.equal(validResponse({ ...base, type: 'ERROR', code: 'arbitrary sensitive error' }), false);
  assert.ok(validRequest(request('GET_CAPABILITIES')));
});

test('Firefox manifest patterns omit ports while runtime authorization keeps exact ports', async () => {
  const { hostPattern } = await import('../src/functions/hoyoverseProtocol.js');
  assert.equal(hostPattern('http://localhost:3000'), 'http://localhost/*');
  assert.equal(hostPattern('http://127.0.0.1:3000'), 'http://127.0.0.1/*');
  assert.equal(hostPattern('https://paimon.moe'), 'https://paimon.moe/*');
  const handler = createConnectorHandler({
    origins: ['http://localhost:3000'],
    fetchImpl: () => assert.fail('No network'),
  });
  const local = { ...sender, url: 'http://localhost:3000/wish/import', origin: 'http://localhost:3000' };
  assert.equal((await handler(request('GET_CAPABILITIES'), local)).type, 'CAPABILITIES');
  assert.equal(
    (
      await handler(request('GET_CAPABILITIES'), {
        ...local,
        url: 'http://localhost:3001/wish/import',
        origin: 'http://localhost:3001',
      })
    ).code,
    'UNSUPPORTED_CONTEXT',
  );
});
