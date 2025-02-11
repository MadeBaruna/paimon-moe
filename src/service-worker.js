import { version } from '$service-worker';

const CACHE = `cache${version}`;

const IMAGE_CACHE_VER = '1659457045';
const IMAGE_CACHE = `cacheimg${IMAGE_CACHE_VER}`;

const IMAGE_URL = `${self.location.origin}/images/`;

const changelog = ['Update v5.4 character, weapons, banners, and timeline'];

const channel = new BroadcastChannel('paimonmoe-sw');

self.addEventListener('install', () => {
  self.skipWaiting();
});

async function fetchAddCache(url) {
  try {
    const cache = await caches.open(CACHE);
    const cachedRes = await cache.match(url);

    if (cachedRes) return;

    const res = await fetch(url);
    if (res.ok) cache.put(url, res.clone());
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
        if (key !== CACHE && key !== IMAGE_CACHE) {
          await caches.delete(key);
          needUpdate = true;
        }
      }

      self.clients.claim();
      console.log('SW NEED UPDATE', needUpdate);
      if (needUpdate) {
        channel.postMessage({
          type: 'update',
          changelog,
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
  if (event.request.url.indexOf(self.location.origin) !== 0 || event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      const cachePath = event.request.url.indexOf(IMAGE_URL) === 0 ? IMAGE_CACHE : CACHE;
      const cache = await caches.open(cachePath);
      const cachedRes = await cache.match(event.request);

      if (cachedRes) {
        return cachedRes;
      }

      const res = await fetch(event.request);
      if (res.ok) cache.put(event.request, res.clone());
      return res;
    })(),
  );
});
