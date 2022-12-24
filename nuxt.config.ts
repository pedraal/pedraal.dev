// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
  ],
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
          href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Indie+Flower&display=swap', rel: 'stylesheet',
        },
      ],
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
  content: {
    documentDriven: true,
  },
})
