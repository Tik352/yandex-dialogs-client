importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1fa190444a0a72beed41.js",
    "revision": "5100b00a67fef937db69b4f215b7226f"
  },
  {
    "url": "/_nuxt/3df5d178fa8ce95278cb.js",
    "revision": "6a3dd15a966a77fda6b0dcd1e0fc0f5c"
  },
  {
    "url": "/_nuxt/73959a34883d667720dd.js",
    "revision": "7eee43950ade6d403fb30785993f05c1"
  },
  {
    "url": "/_nuxt/7c73673b9c11920015df.js",
    "revision": "0062f572b7c0a78e1ed05da7081b1dc6"
  },
  {
    "url": "/_nuxt/e3316c421b5d101c34aa.js",
    "revision": "d5e463a89ce07b1229c0ebd3c7c85234"
  }
], {
  "cacheId": "yandex-dialogs-client",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
