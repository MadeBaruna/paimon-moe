import {
  PROTOCOL,
  CONNECTOR_SOURCE,
  REGIONS,
  validRequest,
  isImportRoute,
} from '../src/functions/hoyoverseProtocol.js';

const ACCOUNT_API = 'https://api-account-os.hoyoverse.com';
const ROLES_PATH = '/account/binding/api/getUserGameRolesOfRegionByCookieToken?game_biz=hk4e_global';
const AUTH_PATH = '/binding/api/genAuthKeyByCookieToken';

// All failures crossing the extension boundary are fixed codes, never upstream bodies.
export function createConnectorHandler({
  origins,
  fetchImpl = (...args) => fetch(...args),
  version = '0.1.0',
  timeout = 30000,
}) {
  const pending = new Map();
  function fail(code) {
    throw Object.assign(new Error(code), { code });
  }
  function context(sender) {
    if (
      !sender ||
      sender.frameId !== 0 ||
      !sender.tab ||
      sender.tab.id < 0 ||
      sender.tab.incognito ||
      (sender.tab.cookieStoreId && sender.tab.cookieStoreId !== 'firefox-default')
    )
      return null;
    try {
      const url = new URL(sender.url);
      if (!origins.includes(url.origin) || !isImportRoute(url.pathname)) return null;
      if (sender.origin && sender.origin !== url.origin) return null;
      return `${sender.tab.id}:${url.origin}`;
    } catch {
      return null;
    }
  }
  async function request(path, signal, payload) {
    let response;
    try {
      response = await fetchImpl(ACCOUNT_API + path, {
        method: payload ? 'POST' : 'GET',
        credentials: 'include',
        redirect: 'error',
        cache: 'no-store',
        signal,
        ...(payload ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) } : {}),
      });
    } catch {
      if (signal.aborted) fail('CANCELLED');
      fail('NETWORK_ERROR');
    }
    if (!response.ok) fail('UPSTREAM_REJECTED');
    let data;
    try {
      data = await response.json();
    } catch {
      fail('UPSTREAM_REJECTED');
    }
    if (data?.retcode !== 0) {
      if ([-100, -101, -10001].includes(data?.retcode)) fail('NOT_SIGNED_IN');
      fail('UPSTREAM_REJECTED');
    }
    if (!data.data || typeof data.data !== 'object') fail('UPSTREAM_REJECTED');
    return data.data;
  }
  async function getRoles(signal) {
    const data = await request(ROLES_PATH, signal);
    if (!Array.isArray(data.list) || data.list.length > 100) fail('UPSTREAM_REJECTED');
    return data.list
      .filter(
        (role) =>
          /^\d{8,12}$/.test(String(role.game_uid)) && Object.prototype.hasOwnProperty.call(REGIONS, role.region),
      )
      .map((role) => ({
        uid: String(role.game_uid),
        region: role.region,
        nickname: typeof role.nickname === 'string' ? role.nickname.slice(0, 100) : '',
      }));
  }
  return async function handle(message, sender) {
    const base = { source: CONNECTOR_SOURCE, protocol: PROTOCOL, requestId: message?.requestId };
    const rejected = (code) => ({ ...base, type: 'ERROR', code });
    const key = context(sender);
    if (!key) return rejected('UNSUPPORTED_CONTEXT');
    if (!validRequest(message)) return rejected('INVALID_MESSAGE');
    if (message.type === 'GET_CAPABILITIES')
      return {
        ...base,
        type: 'CAPABILITIES',
        extensionVersion: version,
        supportedGames: ['hk4e_global'],
      };
    if (message.type === 'CANCEL') {
      // requestId identifies the operation being cancelled; another tab cannot cancel it.
      const job = pending.get(key);
      if (job?.requestId === message.requestId) job.controller.abort();
      return rejected('CANCELLED');
    }
    if (pending.has(key)) return rejected('BUSY');
    const controller = new AbortController();
    const job = { controller, requestId: message.requestId };
    pending.set(key, job);
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeout);
    try {
      const roles = await getRoles(controller.signal);
      if (controller.signal.aborted) fail('CANCELLED');
      if (roles.length === 0) fail('NO_ROLES');
      if (message.type === 'GET_ROLES') return { ...base, type: 'ROLES', roles };
      if (!roles.some((role) => role.uid === message.uid && role.region === message.region)) fail('UID_MISMATCH');
      const data = await request(AUTH_PATH, controller.signal, {
        game_uid: message.uid,
        region: message.region,
        game_biz: 'hk4e_global',
        auth_appid: 'webview_gacha',
      });
      if (controller.signal.aborted) fail('CANCELLED');
      // HoYoverse returns a percent-encoded key. Decode once before URLSearchParams re-encodes it.
      let authkey;
      try {
        authkey = decodeURIComponent(data.authkey);
      } catch {
        fail('UPSTREAM_REJECTED');
      }
      if (typeof data.authkey !== 'string' || !authkey || authkey.length > 16384) fail('UPSTREAM_REJECTED');
      return {
        ...base,
        type: 'AUTHKEY',
        uid: message.uid,
        region: message.region,
        gameBiz: 'hk4e_global',
        authAppId: 'webview_gacha',
        authkey,
      };
    } catch (error) {
      return rejected(
        timedOut
          ? 'TIMEOUT'
          : controller.signal.aborted
          ? 'CANCELLED'
          : ['NOT_SIGNED_IN', 'NO_ROLES', 'UID_MISMATCH', 'UPSTREAM_REJECTED', 'NETWORK_ERROR'].includes(error.code)
          ? error.code
          : 'UPSTREAM_REJECTED',
      );
    } finally {
      clearTimeout(timer);
      if (pending.get(key) === job) pending.delete(key);
    }
  };
}
