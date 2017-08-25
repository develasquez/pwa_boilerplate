var CACHE_NAME = 'cache-v2'; //Cache Name


var filesToCache = [
  '/'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(filesToCache);
      })
      .catch(function (err) {
        console.log("Error occurred while caching ", err);
      })
  );
});

self.addEventListener('activate', function (event) {
  console.log('Event: Activate');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
      )
  );
});

self.addEventListener('push', function (event) {
  console.info('Event: Push');
  var title = 'New commit on Github Repo: RIL';
  var body = {
    'body': 'Click to see the latest commit',
    'tag': 'pwa',
    'icon': './images/48x48.png'
  };
  event.waitUntil(
    self.registration.showNotification(title, body)
  );
});


self.addEventListener('notificationclick', function (event) {
  var url = './index.html';
  event.notification.close();
  event.waitUntil(
    clients.openWindow(url)
  );
});