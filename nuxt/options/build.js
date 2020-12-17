import { config as _config } from '../../config'

export default {
  publicPath: _config.nuxt.publicPath,

  extractCSS: true,

  filenames: {
    app: ({ isDev }) =>
      isDev ? '[name].js' : `${_config.nuxt.filename.app}/[contenthash:7].js`,
    chunk: ({ isDev }) =>
      isDev ? '[name].js' : `${_config.nuxt.filename.chunk}/[contenthash:7].js`,
    css: ({ isDev }) =>
      isDev ? '[name].css' : `${_config.nuxt.filename.css}/[contenthash:7].css`,
    img: ({ isDev }) =>
      isDev
        ? '[path][name].[ext]'
        : `${_config.nuxt.filename.img}/[contenthash:7].[ext]`,
    font: ({ isDev }) =>
      isDev
        ? '[path][name].[ext]'
        : `${_config.nuxt.filename.font}/[contenthash:7].[ext]`,
    video: ({ isDev }) =>
      isDev
        ? '[path][name].[ext]'
        : `${_config.nuxt.filename.video}/[contenthash:7].[ext]`
  },

  postcss: {
    plugins: {
      'postcss-import': true,
      tailwindcss: 'tailwind.config.js'
    }
  },

  templates: [
    {
      src: 'templates/app.html',
      dst: 'views/app.template.html'
    }
  ],

  extend(config, { loaders: { vue } }) {
    const transformAssetUrlsSettings = {
      'app-picture': ['url', 'url-sm', 'url-md', 'url-lg', 'url-xl', 'url-xxl'],
      'app-image': ['url']
    }

    vue.transformAssetUrls = transformAssetUrlsSettings
  }
}
