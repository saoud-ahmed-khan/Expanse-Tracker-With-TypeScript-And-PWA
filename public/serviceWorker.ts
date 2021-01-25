
const cacheName = 'v1';

/*
const cacheAssets = [
  './',
  './serviceRegister.js',
  './index.html',
  
  './App.js'
  
];
*/

const cacheAssets = [
  './',
  '/static/css/main.9deea3a9.chunk.css',
  '/static/js/2.cf08902c.chunk.js',
  '/static/js/main.408ad048.chunk.js',
  '/favicon.ico',
 


];





// Call Install Event

this.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => this.skipWaiting())
  );
});


/*
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine){
    event.respondWith(
      caches.match(event.request).then((resp) => {
  
        if (resp) {
          return resp
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl)
      }
  
      )
  
    )
  
  }
 
})
*/


this.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      .then(response => {
        
        return caches.open(cacheName).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });

    }).catch(error => {

        console.log("error in loading pages")

    })
  );
});





this.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheAllowlist = [cacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
