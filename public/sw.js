/* R6Cheats — offline fallback + static asset cache (Cloudflare Pages) */
const CACHE = 'r6cheat-static-v2';
const OFFLINE_URL = '/offline.html';
const PRECACHE = ['/', '/offline.html', '/favicon.svg', '/site.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Never cache large media (videos / original rasters) — hurts Lighthouse payload.
  if (/\.(mp4|webm|mov|png|jpe?g)$/i.test(url.pathname) || url.pathname.startsWith('/videos/')) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        const cacheable =
          response.ok &&
          (request.destination === 'style' ||
            request.destination === 'script' ||
            request.destination === 'font' ||
            url.pathname.startsWith('/_astro/') ||
            /\.(webp|avif|svg)$/i.test(url.pathname));

        if (cacheable) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate') {
          const offline = await caches.match(OFFLINE_URL);
          if (offline) return offline;
        }
        return Response.error();
      }),
  );
});
