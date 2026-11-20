// Offline support: keeps a copy of the app so it opens without a connection.
// Bump CACHE_NAME whenever the list of files below changes.
const CACHE_PREFIX = 'verses-';
const CACHE_NAME = CACHE_PREFIX + 'v1';
const APP_FILES = [
    './',
    './index.html',
    './bible_verses.css',
    './bible_verses.js',
    './manifest.webmanifest',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable-512.png',
    './icons/apple-touch-icon.png'
];
const NETWORK_TIMEOUT_MS = 3000;

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_FILES))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(names => Promise.all(
                // Other GitHub Pages sites share this origin, so only remove our own old caches
                names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            ))
            .then(() => self.clients.claim())
    );
});

function fromCache(request) {
    return caches.match(request, { ignoreSearch: true }).then(response =>
        response || (request.mode === 'navigate' ? caches.match('./index.html') : undefined)
    );
}

// Network first, so updates show up right away; the cached copy is used when
// offline or when the network is too slow to answer.
function networkFirst(request) {
    return new Promise(resolve => {
        let settled = false;
        const useCache = () => fromCache(request).then(cached => {
            if (cached && !settled) {
                settled = true;
                resolve(cached);
            }
            return cached;
        });
        const timer = setTimeout(useCache, NETWORK_TIMEOUT_MS);

        fetch(request)
            .then(response => {
                clearTimeout(timer);
                if (response.ok) {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                }
                if (!settled) {
                    settled = true;
                    resolve(response);
                }
            })
            .catch(() => {
                clearTimeout(timer);
                useCache().then(cached => {
                    if (!cached && !settled) {
                        settled = true;
                        resolve(Response.error());
                    }
                });
            });
    });
}

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
        return;
    }
    event.respondWith(networkFirst(request));
});
