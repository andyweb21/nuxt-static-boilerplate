const { screens } = require('./config/breakpoints')
const {
  corePlugins,
  variants,
  purge,
  fontFamily,
  colors
} = require('./tailwindcss')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  prefix: '',
  important: false,
  separator: ':',

  theme: {
    fontFamily,
    screens,

    extend: {
      colors
    }
  },

  corePlugins,

  variants,

  plugins: [],

  purge
}
