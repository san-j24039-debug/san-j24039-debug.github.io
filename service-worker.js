self.addEventListener("install", (event) => {
    console.log("Service Worker installed");
});

// キャッシュは最低限
self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request));
});
