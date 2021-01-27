const CACHE_NAME = "expenseTrackerCache"

const filesToCache = [
  "/",
  '/static/css/main.9deea3a9.chunk.css',
  '/static/js/2.8fe3b48e.chunk.js',
  '/static/js/main.f537e58c.chunk.js',
  '/favicon.ico',
  '/static/js/main.ceedb4e8.chunk.js',
  '/manifest.json',
  'serviceWorker.js',

  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/sockjs-node'


]


// Install SW
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

// Listen for requests
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
      })
    )
  }
})

// Activate the SW
this.addEventListener("activate", (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})