// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  site: {
    url: 'https://alec.lefors.me',
    name: 'Alec LeFors',
    description: 'My virtual business card on your screen. Web developer based in Chicago, IL',
    defaultLocale: 'en-us'
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/seo', '@nuxtjs/sitemap'],
  ssr: true,
  content: {
    documentDriven: true
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_media-queries.scss" as *;'
        }
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  ogImage: {
    defaults:{
      component: 'OgImageHome'
    },
    fonts: [
      'Sono:400',
      'Sono:700',
    ]
  }
})