var CACHE_NAME = "erik-cache-v1";
var urlsToCache = [
  "css/style.css",
  "css/bootstrap.css",
  "images/icon.ico",
  "js/jquery-3.5.1.min.js",
  "js/bootstrap.js",
  "libs/fontawesome/all.min.css",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Cache Aberto!");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;
      return fetch;
    })
  );
});
