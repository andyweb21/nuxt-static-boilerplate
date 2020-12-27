export default () => ({
  modules: ['@nuxtjs/pwa', '@nuxtjs/svg', '@nuxtjs/robots', '@nuxtjs/sitemap'],

  buildModules: [
    '@nuxtjs/netlify-files',
    '@modules/globalData',
    'nuxt-font-loader',
    'nuxt-lazysizes'
  ]
})
