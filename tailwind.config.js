const screens = require('./config/default').breakpoints
const {
  corePlugins,
  variants,
  purge,
  fontFamily,
  colors
} = require('./tailwindcss')

/**
 * TailwindCSS Configuration File
 * @link https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
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
