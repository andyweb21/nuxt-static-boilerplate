import { config } from '../../config'

export default {
  port: config.utils.isDev ? config.server.dev.port : config.server.prod.port,

  host: config.utils.isDev ? config.server.dev.host : config.server.prod.host
}
