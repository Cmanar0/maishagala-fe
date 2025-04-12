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
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              50: 'var(--color-primary-50)',
              100: 'var(--color-primary-100)',
              200: 'var(--color-primary-200)',
              300: 'var(--color-primary-300)',
              400: 'var(--color-primary-400)',
              500: 'var(--color-primary-500)',
              600: 'var(--color-primary-600)',
              700: 'var(--color-primary-700)',
              800: 'var(--color-primary-800)',
              900: 'var(--color-primary-900)',
            },
            secondary: {
              50: 'var(--color-secondary-50)',
              100: 'var(--color-secondary-100)',
              200: 'var(--color-secondary-200)',
              300: 'var(--color-secondary-300)',
              400: 'var(--color-secondary-400)',
              500: 'var(--color-secondary-500)',
              600: 'var(--color-secondary-600)',
              700: 'var(--color-secondary-700)',
              800: 'var(--color-secondary-800)',
              900: 'var(--color-secondary-900)',
            },
            neutral: {
              50: 'var(--color-neutral-50)',
              100: 'var(--color-neutral-100)',
              200: 'var(--color-neutral-200)',
              300: 'var(--color-neutral-300)',
              400: 'var(--color-neutral-400)',
              500: 'var(--color-neutral-500)',
              600: 'var(--color-neutral-600)',
              700: 'var(--color-neutral-700)',
              800: 'var(--color-neutral-800)',
              900: 'var(--color-neutral-900)',
            },
          },
          fontFamily: {
            heading: 'var(--font-heading)',
            body: 'var(--font-body)',
          },
          spacing: {
            'xs': 'var(--spacing-xs)',
            'sm': 'var(--spacing-sm)',
            'md': 'var(--spacing-md)',
            'lg': 'var(--spacing-lg)',
            'xl': 'var(--spacing-xl)',
            '2xl': 'var(--spacing-2xl)',
            '3xl': 'var(--spacing-3xl)',
          },
          borderRadius: {
            'sm': 'var(--radius-sm)',
            'md': 'var(--radius-md)',
            'lg': 'var(--radius-lg)',
            'xl': 'var(--radius-xl)',
            '2xl': 'var(--radius-2xl)',
          },
          boxShadow: {
            'sm': 'var(--shadow-sm)',
            'md': 'var(--shadow-md)',
            'lg': 'var(--shadow-lg)',
            'xl': 'var(--shadow-xl)',
          },
        },
      },
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
