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

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function (response) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

self.addEventListener("active", function (event) {
  var cacheAllowList = ["erik-cache-v1", "erik-cache-v2"];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheAllowList.indexOf(cacheName) == -1) return cache.delete(cacheName);
        })
      );
    })
  );
});
