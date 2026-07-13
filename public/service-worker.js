const CACHE_NAME = "chickenhut-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json", "/Logo.jpg"];

// تثبيت Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// استجابة من الكاش أو الشبكة
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
