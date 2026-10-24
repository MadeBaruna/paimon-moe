// protocol.js is prepended by build.mjs; this script stays in the isolated world.
(() => {
  if (window.top !== window) return;
  const origin = window.location.origin;
  if (!CONNECTOR_ORIGINS.includes(origin)) return;
  const api = typeof browser !== 'undefined' ? browser : chrome;
  const active = new Set();
  const send = (message) => {
    if (typeof browser !== 'undefined') return browser.runtime.sendMessage(message);
    return new Promise((resolve, reject) =>
      chrome.runtime.sendMessage(message, (response) => {
        if (chrome.runtime.lastError) reject(new Error('UNAVAILABLE'));
        else resolve(response);
      }),
    );
  };
  window.addEventListener('message', async (event) => {
    if (
      event.source !== window ||
      event.origin !== origin ||
      !isImportRoute(location.pathname) ||
      !validRequest(event.data)
    )
      return;
    const message = event.data;
    if (message.type === 'CANCEL') {
      if (active.delete(message.requestId)) send(message).catch(() => {});
      return;
    }
    if (active.has(message.requestId) || active.size >= 2) return;
    active.add(message.requestId);
    try {
      const response = await send(message);
      if (active.has(message.requestId) && isImportRoute(location.pathname) && validResponse(response)) {
        window.postMessage(response, origin);
      }
    } catch {
      // Reloading/updating the extension invalidates old content scripts.
      if (active.has(message.requestId) && isImportRoute(location.pathname))
        window.postMessage(
          {
            source: CONNECTOR_SOURCE,
            protocol: PROTOCOL,
            requestId: message.requestId,
            type: 'ERROR',
            code: 'EXTENSION_OUTDATED',
          },
          origin,
        );
    } finally {
      active.delete(message.requestId);
    }
  });
})();
