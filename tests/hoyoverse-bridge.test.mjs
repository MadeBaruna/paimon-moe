import test from 'node:test';
import assert from 'node:assert/strict';
import { createHoyoBridge, historyUrl } from '../src/functions/hoyoverseBridge.js';
import { PROTOCOL, CONNECTOR_SOURCE } from '../src/functions/hoyoverseProtocol.js';

function fakeWindow() {
  const listeners = new Set();
  const messages = [];
  const target = {
    crypto: globalThis.crypto,
    location: { origin: 'https://paimon.moe' },
    addEventListener: (_, fn) => listeners.add(fn),
    removeEventListener: (_, fn) => listeners.delete(fn),
    postMessage: (message, origin) => messages.push({ message, origin }),
    emit: (message, extra = {}) =>
      listeners.forEach((fn) => fn({ data: message, source: target, origin: target.location.origin, ...extra })),
  };
  return { target, messages, listeners };
}
const role = { uid: '700000001', region: 'os_euro' };
const reply = (request, fields) => ({
  source: CONNECTOR_SOURCE,
  protocol: PROTOCOL,
  requestId: request.requestId,
  ...fields,
});

test('ignore unrelated window/origin, stale IDs, and wrong response type', async () => {
  const { target, messages, listeners } = fakeWindow();
  const bridge = createHoyoBridge(target);
  const pending = bridge.roles();
  const request = messages[0].message;
  const data = reply(request, { type: 'ROLES', roles: [{ ...role, nickname: 'Test' }] });
  target.emit(data, { origin: 'https://evil.example' });
  target.emit(data, { source: {} });
  target.emit({ ...data, requestId: 'stale' });
  target.emit(reply(request, { type: 'CAPABILITIES', extensionVersion: '0.1.0', supportedGames: ['hk4e_global'] }));
  let settled = false;
  pending.then(() => {
    settled = true;
  });
  await Promise.resolve();
  assert.equal(settled, false);
  target.emit(data);
  assert.deepEqual((await pending).roles, [{ ...role, nickname: 'Test' }]);
  bridge.destroy();
  assert.equal(listeners.size, 0);
});

test('abort discards late authkeys and sends cancellation with the same ID', async () => {
  const { target, messages } = fakeWindow();
  const bridge = createHoyoBridge(target);
  const controller = new AbortController();
  const pending = bridge.authkey(role, { signal: controller.signal });
  controller.abort();
  await assert.rejects(pending, { code: 'CANCELLED' });
  assert.equal(messages[1].message.type, 'CANCEL');
  assert.equal(messages[1].message.requestId, messages[0].message.requestId);
  target.emit(
    reply(messages[0].message, {
      type: 'AUTHKEY',
      ...role,
      authkey: 'secret',
      gameBiz: 'hk4e_global',
      authAppId: 'webview_gacha',
    }),
  );
  bridge.destroy();
});

test('destroy cancels pending work and rejects future requests', async () => {
  const { target } = fakeWindow();
  const bridge = createHoyoBridge(target);
  const pending = bridge.roles();
  bridge.destroy();
  await assert.rejects(pending, { code: 'CANCELLED' });
  await assert.rejects(bridge.roles(), { code: 'CANCELLED' });
});

test('timeout cancels pending operation', async () => {
  const { target } = fakeWindow();
  const bridge = createHoyoBridge(target);
  await assert.rejects(bridge.roles({ timeout: 5 }), { code: 'TIMEOUT' });
  bridge.destroy();
});

test('independently check the UID/region returned by the extension', async () => {
  const { target, messages } = fakeWindow();
  const bridge = createHoyoBridge(target);
  const pending = bridge.authkey(role);
  target.emit(
    reply(messages[0].message, {
      type: 'AUTHKEY',
      ...role,
      uid: '700000002',
      authkey: 'key',
      gameBiz: 'hk4e_global',
      authAppId: 'webview_gacha',
    }),
  );
  await assert.rejects(pending, { code: 'UID_MISMATCH' });
  bridge.destroy();
});

test('canonical history URL preserves key encoding and rejects unsupported roles', () => {
  const context = { ...role, authkey: 'key+with/slash=%25', gameBiz: 'hk4e_global', authAppId: 'webview_gacha' };
  const url = historyUrl(context);
  assert.equal(url.origin, 'https://public-operation-hk4e-sg.hoyoverse.com');
  assert.equal(url.searchParams.get('authkey'), context.authkey);
  assert.throws(() => historyUrl({ ...context, region: 'cn_gf01' }), { code: 'INVALID_MESSAGE' });
});
