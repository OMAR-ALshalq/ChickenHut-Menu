const CACHE_NAME = "chickenhut-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/Logo.jpg" // تأكد أن الصورة موجودة في public/
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("جاري تخزين الملفات الأساسية");
      return cache.addAll(urlsToCache).catch((err) => {
        console.warn("تعذر تخزين بعض الملفات", err);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  // تجاهل الطلبات غير GET أو من أصول خارجية
  if (
    event.request.method !== "GET" ||
    !event.request.url.startsWith(self.location.origin)
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // خزّن الصور والخطوط وملفات الـ CSS و JS تلقائيًا
        if (
          response.status === 200 &&
          event.request.destination &&
          ["image", "style", "script", "font"].includes(
            event.request.destination
          )
        ) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
