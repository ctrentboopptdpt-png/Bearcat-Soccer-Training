const cacheName = "off-season-soccer-training-v3";
const appShell = [
  "./",
  "./index.html",
  "./offseason-training.html",
  "./offseason-training.css",
  "./offseason-training.js",
  "./assets/spencerville-bearcats-soccer.png",
  "./assets/training-app-icon.svg",
  "./site.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(appShell)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
