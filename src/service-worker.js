const CACHE_VERSION = 'crazystory-pwa-v5';
const APP_SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './themes.css',
  './script.js',
  './manifest.webmanifest',
  './favicon.ico',
  './apple-touch-icon.png',
  './apple-touch-icon-precomposed.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/maskable-512.png',
  './assets/player-default.svg',
  './assets/background/autumn_desktop_bg_app.webp',
  './assets/background/autumn_desktop_bg_home.webp',
  './assets/background/autumn_mobile_bg_home.webp',
  './assets/background/contrast_desktop_bg_app.webp',
  './assets/background/contrast_desktop_bg_home.webp',
  './assets/background/contrast_mobile_bg_home.webp',
  './assets/background/cosmic_desktop_bg_app.webp',
  './assets/background/cosmic_desktop_bg_home.webp',
  './assets/background/cosmic_mobile_bg_home.webp',
  './assets/background/dark_desktop_bg_app.webp',
  './assets/background/dark_desktop_bg_home.webp',
  './assets/background/dark_mobile_bg_home.webp',
  './assets/background/light_desktop_bg_app.webp',
  './assets/background/light_desktop_bg_home.webp',
  './assets/background/light_mobile_bg_home.webp',
  './assets/background/spring_desktop_bg_app.webp',
  './assets/background/spring_desktop_bg_home.webp',
  './assets/background/spring_mobile_bg_home.webp'
];

// Music (~3.5 MB per track) is not precached: each track is cached in full the first
// time it plays, so a theme's music works offline after it has been heard once.
const AUDIO_PATTERN = /\.mp3$/i;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => !key.startsWith(CACHE_VERSION))
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function isLocalAsset(requestUrl) {
  return requestUrl.origin === self.location.origin;
}

function shouldRuntimeCache(request) {
  if (request.method !== 'GET') return false;
  const url = new URL(request.url);
  if (!isLocalAsset(url)) return false;
  return /\.(?:png|jpg|jpeg|svg|webp|mp3|css|js|json|webmanifest)$/i.test(url.pathname);
}

async function cacheFirst(request) {
  const cached = await caches.match(request.url);
  if (cached) return cached;
  // <audio> sends Range requests; a 206 cannot be stored, so fetch the whole file once.
  const fetchRequest = AUDIO_PATTERN.test(new URL(request.url).pathname) ? request.url : request;
  const response = await fetch(fetchRequest);
  if (response && response.status === 200) {
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request.url, response.clone());
  }
  return response;
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(APP_SHELL_CACHE);
      cache.put('./index.html', response.clone());
    }
    return response;
  } catch (error) {
    return caches.match('./index.html');
  }
}

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (shouldRuntimeCache(request)) {
    event.respondWith(cacheFirst(request));
  }
});
