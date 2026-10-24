import { PROTOCOL, PAGE_SOURCE, validResponse, validRole, REGIONS } from './hoyoverseProtocol.js';

export function createHoyoBridge(target = window) {
  const pending = new Map();
  let destroyed = false;
  const origin = target.location.origin;
  const failure = (code) => Object.assign(new Error(code), { code });
  const post = (type, requestId, data = {}) =>
    target.postMessage(
      {
        ...data,
        source: PAGE_SOURCE,
        protocol: PROTOCOL,
        type,
        requestId,
      },
      origin,
    );
  function receive(event) {
    if (event.source !== target || event.origin !== origin || !validResponse(event.data)) return;
    const job = pending.get(event.data.requestId);
    if (!job) return;
    const expected = { GET_CAPABILITIES: 'CAPABILITIES', GET_ROLES: 'ROLES', CREATE_AUTHKEY: 'AUTHKEY' }[job.type];
    if (event.data.type === 'ERROR') job.finish(failure(event.data.code));
    else if (event.data.type === expected) job.finish(null, event.data);
  }
  target.addEventListener('message', receive);
  function request(type, data = {}, { signal, timeout = 35000 } = {}) {
    if (destroyed || signal?.aborted) return Promise.reject(failure('CANCELLED'));
    if (pending.size) return Promise.reject(failure('BUSY'));
    const requestId = target.crypto.randomUUID();
    return new Promise((resolve, reject) => {
      const cancel = () => {
        post('CANCEL', requestId);
        finish(failure('CANCELLED'));
      };
      const timer = setTimeout(() => {
        post('CANCEL', requestId);
        finish(failure(type === 'GET_CAPABILITIES' ? 'EXTENSION_MISSING' : 'TIMEOUT'));
      }, timeout);
      function finish(error, result) {
        if (!pending.delete(requestId)) return;
        clearTimeout(timer);
        signal?.removeEventListener('abort', cancel);
        if (error) reject(error);
        else resolve(result);
      }
      pending.set(requestId, { type, finish, cancel });
      signal?.addEventListener('abort', cancel, { once: true });
      post(type, requestId, data);
    });
  }
  return {
    capabilities: () => request('GET_CAPABILITIES', {}, { timeout: 1500 }),
    roles: (options) => request('GET_ROLES', {}, options),
    authkey: async (role, options) => {
      if (!validRole(role)) throw failure('UNSUPPORTED_REGION');
      const response = await request('CREATE_AUTHKEY', { uid: role.uid, region: role.region }, options);
      if (response.uid !== role.uid || response.region !== role.region) throw failure('UID_MISMATCH');
      return response;
    },
    destroy: () => {
      destroyed = true;
      for (const job of [...pending.values()]) job.cancel();
      target.removeEventListener('message', receive);
    },
  };
}

export function historyUrl(context) {
  if (
    !validRole(context) ||
    context.gameBiz !== 'hk4e_global' ||
    context.authAppId !== 'webview_gacha' ||
    typeof context.authkey !== 'string' ||
    !context.authkey ||
    context.authkey.length > 16384
  ) {
    throw Object.assign(new Error('INVALID_MESSAGE'), { code: 'INVALID_MESSAGE' });
  }
  const url = new URL('https://public-operation-hk4e-sg.hoyoverse.com/gacha_info/api/getGachaLog');
  url.search = new URLSearchParams({
    authkey: context.authkey,
    authkey_ver: '1',
    auth_appid: 'webview_gacha',
    game_biz: 'hk4e_global',
    region: context.region,
    lang: 'en',
  }).toString();
  return url;
}

export { REGIONS };
