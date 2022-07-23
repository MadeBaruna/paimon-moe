import { version } from '$service-worker';

const CACHE = `cache${version}`;
const channel = new BroadcastChannel('paimonmoe-sw');

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

async function fetchAddCache(url) {
  try {
    const cache = await caches.open(CACHE);
    const cachedRes = await cache.match(url);

    if (cachedRes) return;

    const res = await fetch(url);
    cache.put(url, res.clone());
  } catch (err) {
    console.error(err);
  }
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      let needUpdate = false;
      // delete old caches
      for (const key of keys) {
        if (key !== CACHE) {
          await caches.delete(key);
          needUpdate = true;
        }
      }

      self.clients.claim();
      console.log('SW NEED UPDATE', needUpdate);
      if (needUpdate) {
        channel.postMessage({
          type: 'update',
          version,
        });
      }

      fetchAddCache('/');
      channel.addEventListener('message', (event) => {
        if (event.data.type === 'fetch-doc') {
          fetchAddCache(event.data.path);
        }
      });
    }),
  );
});

self.addEventListener('fetch', async (event) => {
  if (!event.request.url.startsWith(self.location.origin) || event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cachedRes = await cache.match(event.request);

      if (cachedRes) {
        return cachedRes;
      }

      const res = await fetch(event.request);
      cache.put(event.request, res.clone());
      return res;
    })(),
  );
});
