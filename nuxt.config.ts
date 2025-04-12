export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.css'
  ],

  tailwindcss: {
    exposeConfig: true,
    config: {
      content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.{vue,js}',
        './pages/**/*.{vue,js}',
        './app.vue',
        './node_modules/@nuxt/ui/**/*.{vue,js}'
      ]
    }
  },

  app: {
    head: {
      title: 'MaishaGala',
      titleTemplate: '%s · MaishaGala',
      meta: [
        { name: 'description', content: 'Official MaishaGala site' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  }
})
