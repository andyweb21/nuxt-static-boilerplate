import { config } from '../../config'

export default {
  UserAgent: () => ['*'],
  Disallow: () => [
    `${config.nuxt.publicPath}${config.nuxt.filename.img}/`,
    `${config.nuxt.publicPath}${config.nuxt.filename.font}/`,
    `${config.nuxt.publicPath}${config.nuxt.filename.video}/`,
    `${config.nuxt.publicPath}${config.nuxt.filename.icon}/`,
    `/${config.nuxt.filename.img}/`,
    `/${config.nuxt.filename.font}/`,
    `/${config.nuxt.filename.video}/`,
    `/${config.nuxt.filename.icon}/`
  ],
  Sitemap: () => [`${config.app.public.url}/sitemap.xml`]
}
