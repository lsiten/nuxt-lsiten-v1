
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '今日打鸡蛋',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/units/common'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/pwa',
      {
        icon: false,
        meta: {},
        workbox: {
          dev: false,
          skipWaiting: true,
          // workboxURL: 'https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js',
          config: {
            debug: true,
            // modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
          },
          importScripts: [
            '/lsiten-sw.js'
          ],
          cachingExtensions: [
            '@/workbox/workbox-range-request.js',
            '@/workbox/workbox-life.js'
          ],
          routingExtensions: [
            '@/workbox/ali.js'
          ],
          runtimeCaching: [
            {
              urlPattern: 'https://g.alicdn.com/.*',
              strategyOptions: {
                cacheName: 'lsiten-cdn',
                cacheExpiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 300
                }
              }
            },
            {
              // To match cross-origin requests, use a RegExp that matches
              // the start of the origin:
              urlPattern: new RegExp('/sw_portal/'),
              handler: 'staleWhileRevalidate',
              options: {
                // Configure which responses are considered cacheable.
                cacheableResponse: {
                  statuses: [200]
                }
              }
            },
          ]
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
