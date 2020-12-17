// @link https://tailwindcss.com/docs/optimizing-for-production

module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  mode: 'layers',
  layers: ['components', 'utilities'],
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ]
}
