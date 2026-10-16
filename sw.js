const CACHE = "guest-v5"

self.addEventListener("install", (event) => {
  self.skipWaiting()
  event.waitUntil(Promise.resolve())
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url)
  if (event.request.method !== "GET" || url.origin !== self.location.origin) return
  if (url.pathname.includes("/assets/")) {
    event.respondWith(caches.open(CACHE).then(async (cache) => {
      const hit = await cache.match(event.request)
      if (hit) return hit
      const response = await fetch(event.request)
      if (response.ok) cache.put(event.request, response.clone())
      return response
    }))
    return
  }
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).then((response) => {
        const copy = response.clone()
        caches.open(CACHE).then((cache) => cache.put(event.request, copy))
        return response
      }).catch(() => caches.match(event.request)),
    )
  }
})
