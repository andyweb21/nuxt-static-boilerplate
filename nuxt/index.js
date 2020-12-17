import head from './options/head'
import plugins from './options/plugins'
import css from './options/css'
import pageTransition from './options/pageTransition'
import layoutTransition from './options/layoutTransition'
// import features from './features'
import modules from './options/modules'
import dir from './options/dir'
import watch from './options/watch'
import runtimeConfig from './options/runtimeConfig'
import build from './options/build'
import render from './options/render'
import router from './options/router'
import server from './options/server'
import generate from './options/generate'
import pwa from './modules/pwa'
import robots from './modules/robots'
import sitemap from './modules/sitemap'
import netlifyFiles from './modules/netlifyFiles'
import fontLoader from './modules/fontLoader'
import globalData from './modules/globalData'

export function getCustomNuxtConfig() {
  return {
    head,
    ...plugins(),
    ...css(),
    pageTransition,
    layoutTransition,
    // features,
    ...modules(),
    dir,
    ...watch(),
    ...runtimeConfig(),
    build,
    render,
    router,
    server,
    generate,
    pwa,
    robots,
    sitemap,
    netlifyFiles,
    fontLoader,
    globalData
  }
}
