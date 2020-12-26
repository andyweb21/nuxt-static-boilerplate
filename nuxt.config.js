import { config } from './config'
import { getCustomNuxtConfig } from './nuxt'

export default {
  /*
   ** Nuxt target
   */
  target: 'static',

  /*
   ** Auto import components
   */
  components: false,

  /*
   ** Modern mode
   */
  modern: !config.utils.isDev && 'client',

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Nuxt telemetry
   */
  telemetry: true,

  /*
   ** Customize the global ID
   */
  globalName: config.nuxt.globalName,

  /*
   ** Customize the default Nuxt config
   */
  ...getCustomNuxtConfig()
}
