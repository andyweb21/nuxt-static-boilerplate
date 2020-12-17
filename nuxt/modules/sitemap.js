import { app } from '../../config/app'

export default {
  path: '/sitemap.xml',
  hostname: app.public.url,
  trailingSlash: true,
  gzip: true,
  exclude: ['/.git'],
  defaults: {
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(),
    lastmodrealtime: true
  }
}
