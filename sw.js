const CACHE_NAME = 'frekvens-v1';
const urlsToCache = [
  './',
  './index.html',
  // Tilføj alle dine filer her (CSS, JS, billeder)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});