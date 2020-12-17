import { config } from '../../config'

export default {
  icon: {
    targetDir: config.nuxt.filename.icon,
    source: 'assets/favicons/icon.png',
    fileName: 'icon.png',
    sizes: [64, 192, 512]
  },

  meta: {
    author: config.app.author.fullName,
    mobileApp: true,
    ogType: false,
    ogTitle: false,
    ogSiteName: false,
    ogDescription: false
  },

  manifest: {
    name: config.app.name,
    short_name: config.app.shortName,
    description: config.app.description,
    lang: config.app.lang,
    // start_url: config.nuxt.routerBase + '?standalone=true',
    // scope: config.nuxt.routerBase,
    theme_color: config.app.themeColor,
    background_color: config.app.backgroundColor,
    orientation: 'portrait',
    display: 'standalone',
    useWebmanifestExtension: false
  }

  // workbox: {}
}
