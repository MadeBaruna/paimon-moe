// Shared by the page, content script, and background worker. No browser globals.
export const PROTOCOL = 1;
export const PAGE_SOURCE = 'paimon-moe';
export const CONNECTOR_SOURCE = 'paimon-moe-connector';
export const MAX_MESSAGE_SIZE = 32768;
export const REGIONS = { os_usa: 'America', os_euro: 'Europe', os_asia: 'Asia', os_cht: 'Asia' };
export const REQUEST_TYPES = ['GET_CAPABILITIES', 'GET_ROLES', 'CREATE_AUTHKEY', 'CANCEL'];
export const ERROR_CODES = [
  'NOT_SIGNED_IN',
  'NO_ROLES',
  'UID_MISMATCH',
  'UNSUPPORTED_CONTEXT',
  'UNSUPPORTED_REGION',
  'UPSTREAM_REJECTED',
  'NETWORK_ERROR',
  'TIMEOUT',
  'CANCELLED',
  'BUSY',
  'INVALID_MESSAGE',
  'EXTENSION_OUTDATED',
  'EXTENSION_MISSING',
];

export function isImportRoute(pathname) {
  return pathname === '/wish/import' || pathname === '/wish/import/';
}

export function boundedMessage(message) {
  try {
    return (
      message !== null &&
      typeof message === 'object' &&
      !Array.isArray(message) &&
      JSON.stringify(message).length <= MAX_MESSAGE_SIZE
    );
  } catch {
    return false;
  }
}

export function validRole(role) {
  return (
    role &&
    typeof role.uid === 'string' &&
    /^\d{8,12}$/.test(role.uid) &&
    Object.prototype.hasOwnProperty.call(REGIONS, role.region)
  );
}

export function validRequest(message) {
  return (
    boundedMessage(message) &&
    message.source === PAGE_SOURCE &&
    message.protocol === PROTOCOL &&
    typeof message.requestId === 'string' &&
    /^[a-zA-Z0-9_-]{1,80}$/.test(message.requestId) &&
    REQUEST_TYPES.includes(message.type) &&
    (message.type !== 'CREATE_AUTHKEY' || validRole(message))
  );
}

export function validResponse(message) {
  if (
    !boundedMessage(message) ||
    message.source !== CONNECTOR_SOURCE ||
    message.protocol !== PROTOCOL ||
    typeof message.requestId !== 'string' ||
    message.requestId.length > 80
  )
    return false;
  if (message.type === 'ERROR') return ERROR_CODES.includes(message.code);
  if (message.type === 'CAPABILITIES')
    return (
      typeof message.extensionVersion === 'string' &&
      message.extensionVersion.length < 40 &&
      Array.isArray(message.supportedGames) &&
      message.supportedGames.includes('hk4e_global')
    );
  if (message.type === 'ROLES')
    return (
      Array.isArray(message.roles) &&
      message.roles.length <= 100 &&
      message.roles.every((role) => validRole(role) && typeof role.nickname === 'string' && role.nickname.length <= 100)
    );
  if (message.type === 'AUTHKEY')
    return (
      validRole(message) &&
      message.gameBiz === 'hk4e_global' &&
      message.authAppId === 'webview_gacha' &&
      typeof message.authkey === 'string' &&
      message.authkey.length > 0 &&
      message.authkey.length <= 16384
    );
  return false;
}

// Firefox accepts port-bearing patterns but does not match them to page URLs.
// Match hosts in the manifest and enforce the exact origin (including port) at runtime.
export function hostPattern(origin) {
  const url = new URL(origin);
  return `${url.protocol}//${url.hostname}/*`;
}
