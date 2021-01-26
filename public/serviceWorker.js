const CACHE_NAME = "expenseTrackerCache"

const filesToCache = [
  "/",
  "index.html",
  "manifest.json",

  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",

  '/static/css/main.9deea3a9.chunk.css',
  '/static/js/2.cf08902c.chunk.js',
  '/static/js/main.68a4554a.chunk.js',
  
  
  '/static/js/main.3c97377f.chunk.js',
  '/static/js/main.3412f04b.chunk.js',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/favicon-16x16.png'




  

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