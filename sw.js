// Minimaler Service Worker — wird nur für PWA-Installierbarkeit benötigt.
// Bewusst ohne Offline-Cache, damit die Firebase-Live-Daten nie veraltet
// aus dem Cache kommen. Reine Passthrough-Strategie.
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
