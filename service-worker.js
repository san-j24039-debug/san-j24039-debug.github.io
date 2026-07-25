const CACHE_VERSION = "chronex-v20260725-2";

self.addEventListener("install", () => {
    console.log("Service Worker installed:", CACHE_VERSION);
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
    if(event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request));
});
