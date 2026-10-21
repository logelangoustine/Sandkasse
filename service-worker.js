self.addEventListener('install', () => {
    console.log('Service Worker installeret');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
    );
});
