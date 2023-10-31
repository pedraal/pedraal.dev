// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/plausible',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    'nuxt-delay-hydration',
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  plausible: {
    trackLocalhost: true,
    domain: process.env.DEV ? 'pedraaldev.local' : process.env.APP_DOMAIN,
    apiHost: 'https://plausible.pedraal.fr',
  },
  site: {
    url: process.env.APP_ORIGIN,
  },
  sitemap: {
    strictNuxtContentPaths: true,
    exclude: [
      '/admin/**',
    ],
  },
  delayHydration: {
    debug: !!process.env.DEV,
    mode: 'mount',
  },
  app: {
    head: {
      title: 'Pierre Golfier',
      link: [
        {
          rel: 'preconnect', href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', rel: 'stylesheet',
        },
      ],
      bodyAttrs: {
        class: process.env.NODE_ENV === 'development' ? 'debug-screens' : '',
      },
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  runtimeConfig: {
    appOrigin: process.env.APP_ORIGIN || 'http://localhost:3000',
    public: {
      appDomain: process.env.APP_DOMAIN || 'localhost:3000',
    },
  },
})
