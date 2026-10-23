const CACHE_NAME = 'hiit-timer-v2';
// Add all files that need to be saved offline
const urlsToCache = [
  './index.html',
  './manifest.json',
  './get-ready.mp3',
  './3.mp3',
  './2.mp3',
  './1.mp3',
  './half-way.mp3',
  './work.mp3',
  './rest.mp3',
  './complete.mp3'
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