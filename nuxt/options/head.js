import { app } from '../../config/app'

export default {
  htmlAttrs: {
    lang: app.lang
  },

  bodyAttrs: {},

  /**
   * Corrects the page title when routes have a delayed transition
   * features: { transitions: true }
   *
   * @link https://github.com/nuxt/vue-meta/issues/621
   *
   */
  title: null,
  titleTemplate: null,

  meta: [
    {
      hid: 'charset',
      charset: app.charset
    },
    {
      hid: 'http-equiv',
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    },
    {
      hid: 'viewport',
      name: 'viewport',
      content: 'width=device-width,initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: app.description
    },
    {
      hid: 'robots',
      name: 'robots',
      content:
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    }
  ]
}
