import { config } from '../../config'

export default {
  // App
  app: {
    name: config.app.name,
    title: config.app.title,
    titleSeparator: config.app.titleSeparator,
    titleTemplate: config.app.titleTemplate,
    fullTitle: config.app.fullTitle,
    description: config.app.description,
    host: config.app.host,
    type: config.app.type
  },
  // Breakpoints
  screens: config.screens
}
