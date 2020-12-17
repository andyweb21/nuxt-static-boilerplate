import * as app from './app'
import * as server from './server'
import * as nuxt from './nuxt'
import * as screens from './breakpoints'
import * as utils from './utils'

export const config = {
  ...app,
  ...server,
  ...nuxt,
  ...screens,
  ...utils
}
