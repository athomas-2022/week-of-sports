/* Register the service worker so Week of Sports can be installed to the home screen.
   Fails silently on browsers that don't support it (nothing breaks). */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').catch(function () {});
  });
}
