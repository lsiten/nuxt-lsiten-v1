
  // workbox.routing.registerRoute(
  //   new RegExp('https://g\.alicdn\.com/'),
  //   new workbox.strategies.StaleWhileRevalidate({
  //     cacheName: 'sw_port:static',
  //     plugins: [
  //       new workbox.cacheableResponse.Plugin({
  //         statuses: [0, 200]
  //       }),
  //       new workbox.expiration.Plugin({
  //         maxEntries: 20
  //       })
  //     ]
  //   })
  // );
  
  // workbox.routing.registerRoute(
  //   new RegExp('https://img\.alicdn\.com/'),
  //   new workbox.strategies.CacheFirst({
  //     cacheName: 'sw_port:img',
  //     plugins: [
  //       new workbox.cacheableResponse.Plugin({
  //         statuses: [0, 200]
  //       }),
  //       new workbox.expiration.Plugin({
  //         maxEntries: 20,
  //         maxAgeSeconds: 12 * 60 * 60
  //       })
  //     ]
  //   })
  // );
  
  workbox.routing.registerRoute(
    new RegExp('static/'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'sw_port:img',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxEntries: 30,
          maxAgeSeconds: 12 * 60 * 60
        })
      ]
    })
  );
