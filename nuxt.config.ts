export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
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
    chromePath: process.env.CHROME_PATH || undefined,
    public: {
      appDomain: process.env.APP_DOMAIN || 'localhost:3000',
      email: 'pro@pedraal.fr',
      phone: '06 17 21 19 97',
      github: 'https://github.com/pedraal',
    },
  },
  experimental: {
    asyncContext: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
