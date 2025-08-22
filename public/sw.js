self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mybet-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/manifest.webmanifest',
                '/next.svg',
                '/vercel.svg',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;
    // Network falling back to cache for dynamic content; cache-first for static assets
    event.respondWith(
        caches.match(request).then((cached) => {
            const fetchPromise = fetch(request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open('mybet-v1').then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() => cached || caches.match('/offline'));
            return cached || fetchPromise;
        })
    );
});


