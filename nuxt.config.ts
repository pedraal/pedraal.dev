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
    '@sidebase/nuxt-pdf',
    // '@nuxt/image',
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
  // image: {
  //   dir: 'assets/images'
  // },
  site: {
    url: process.env.APP_ORIGIN,
  },
  sitemap: {
    strictNuxtContentPaths: true,
    exclude: [
      '/resume_html',
    ],
  },
  delayHydration: {
    debug: !!process.env.DEV,
    mode: 'mount',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Pierre Golfier',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        {
          href: 'https://fonts.bunny.net/css?family=indie-flower:400|poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap', rel: 'stylesheet',
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
    chromePath: process.env.CHROME_PATH || undefined,
    public: {
      appDomain: process.env.APP_DOMAIN || 'localhost:3000',
      email: 'pro@pedraal.dev',
      phone: '06 51 62 31 35',
      github: 'https://github.com/pedraal',
      linkedin: 'https://www.linkedin.com/in/pierre-golfier-9aa804109/'
    },
  },
})
