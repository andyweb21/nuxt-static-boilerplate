import { server } from './server'
import { utils } from './utils'

export const app = {}

app.local = {}
app.local.protocol = server.dev.protocol
app.local.hostname = server.dev.host
app.local.port = server.dev.port

app.local.url = `${app.local.protocol}//${app.local.hostname}:${app.local.port}`

app.public = {}
app.public.protocol = 'https:'
app.public.hostname = 'website'
app.public.domain = 'com'

app.public.baseUrl = `${app.public.protocol}//${app.public.hostname}.${app.public.domain}`
app.public.url = `${app.public.protocol}//www.${app.public.hostname}.${app.public.domain}`

app.host = utils.isDev ? app.local.url : app.public.url

app.author = {}
app.author.firstName = 'name'
app.author.lastName = 'surname'
app.author.fullName = app.author.firstName + app.author.lastName
app.author.email = 'email@website.com'

app.charset = 'utf-8'
app.lang = 'en-US'
app.locale = 'en_US'
app.type = 'website'
app.themeColor = '#00c58e'
app.backgroundColor = '#f5f8f9'

app.name = 'Nuxt Static Boilerplate'
app.shortName = 'Nuxt Static'
app.description =
  'A well-organized Nuxt template for creating fast static applications.'

app.title = app.name
app.titleSeparator = ' — '
app.titleTemplate = app.description
app.fullTitle = app.title + app.titleSeparator + app.titleTemplate
