export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,

  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Juliette Cougnoux - Backend Engineer & Web Maker',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio de Juliette Cougnoux, Backend Engineer Node.js/NestJS. Développement web moderne avec Vue.js, Nuxt, React Native et WordPress.'
        },
        { name: 'author', content: 'Juliette Cougnoux' },
        { name: 'keywords', content: 'Backend Engineer, Node.js, NestJS, Vue.js, Nuxt, React Native, TypeScript, PostgreSQL, MongoDB, Développeur Web, Marseille' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://juliettecougnoux.dev/' },
        { property: 'og:title', content: 'Juliette Cougnoux - Backend Engineer & Web Maker' },
        { property: 'og:description', content: 'Backend Engineer spécialisée en Node.js/NestJS, Vue.js et développement web moderne.' },
        { property: 'og:image', content: 'https://juliettecougnoux.dev/juliette-cougnoux.jpeg' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:locale:alternate', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://juliettecougnoux.dev/' },
        { name: 'twitter:title', content: 'Juliette Cougnoux - Backend Engineer & Web Maker' },
        { name: 'twitter:description', content: 'Backend Engineer spécialisée en Node.js/NestJS, Vue.js et développement web moderne.' },
        { name: 'twitter:image', content: 'https://juliettecougnoux.dev/juliette-cougnoux.jpeg' },

        // SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#FFBE99' },
        { name: 'msapplication-TileColor', content: '#FFBE99' }
      ],
      link: [
        { rel: 'canonical', href: 'https://juliettecougnoux.dev/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/cv',
        '/contact',
        '/legal',
        '/en',
        '/en/cv',
        '/en/contact',
        '/en/legal'
      ]
    }
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'fr',
        file: 'fr.json'
      },
      {
        code: 'en',
        file: 'en.json'
      }
    ],
    langDir: '../locales',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    vueI18n: './i18n.config.ts',
    compilation: {
      strictMessage: false,
      escapeHtml: false
    }
  }
})