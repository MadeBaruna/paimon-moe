// Built after protocol.js and background.js. No cookie-reading or storage APIs.
const api = typeof browser !== 'undefined' ? browser : chrome;
const handler = createConnectorHandler({ origins: CONNECTOR_ORIGINS, version: api.runtime.getManifest().version });
api.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handler(message, sender).then(sendResponse, () =>
    sendResponse({
      source: CONNECTOR_SOURCE,
      protocol: PROTOCOL,
      requestId: message?.requestId,
      type: 'ERROR',
      code: 'UPSTREAM_REJECTED',
    }),
  );
  return true;
});

// A full tab keeps Firefox's permission prompt visible until the user answers.
api.action.onClicked.addListener((tab) => {
  let origin = CONNECTOR_ORIGINS.find((value) => value.startsWith('http://localhost')) || CONNECTOR_ORIGINS[0];
  try {
    const current = new URL(tab.url).origin;
    if (CONNECTOR_ORIGINS.includes(current)) origin = current;
  } catch {}
  api.tabs.create({ url: api.runtime.getURL('setup.html') + '?origin=' + encodeURIComponent(origin) });
});
