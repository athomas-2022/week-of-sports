/* Week of Sports — service worker.
   Enables "Add to Home Screen" (installable app) + light offline support.
   Strategy is NETWORK-FIRST on purpose: the site updates often (leaderboard,
   config, content), so we always try the network and only fall back to the
   cached copy when the device is offline. This avoids serving stale pages. */
var CACHE = 'wos-v1';
var CORE = [
  '/', '/index.html', '/config.js',
  '/assets/site.css', '/assets/page.js',
  '/assets/favicon-192.png', '/assets/favicon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE).catch(function () {}); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return; // ignore Google/YouTube/etc.
  e.respondWith(
    fetch(req).then(function (res) {
      /* Only whole, successful, same-origin responses are cacheable. cache.put()
         rejects on a 206 (the hero video's range requests) and can reject when the
         phone is out of storage — either way, never let that break the page. */
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        e.waitUntil(
          caches.open(CACHE)
            .then(function (c) { return c.put(req, copy); })
            .catch(function () {})
        );
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (m) { return m || caches.match('/'); });
    })
  );
});
