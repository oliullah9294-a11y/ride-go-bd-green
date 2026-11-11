// RideGo BD Green - PWA Service Worker V64
const CACHE_NAME = 'ridego-v64-green';

self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('RideGo SW Installed V64');
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
