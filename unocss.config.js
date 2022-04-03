/**
 * UnoCSS Config
 * @link https://github.com/unocss/unocss#configurations
 */ 

module.exports = {
  rules: [
    // Content
    [ /^content-\[(.*)\]$/, ([, content]) => ({ content: JSON.stringify(content) }) ],

    // Font Family
    [ 'font-sans-s', { 'font-family': '"S", Helvetica Neue, Arial, sans-serif' } ],

    // Font Weight - Variable
    [ 'font-300', { 'font-variation-settings': `'wght' 300` } ],
    [ 'font-350', { 'font-variation-settings': `'wght' 350` } ],
    [ 'font-400', { 'font-variation-settings': `'wght' 400` } ],
    [ 'font-450', { 'font-variation-settings': `'wght' 450` } ],
    [ 'font-500', { 'font-variation-settings': `'wght' 500` } ],
    [ 'font-550', { 'font-variation-settings': `'wght' 550` } ],
    [ 'font-600', { 'font-variation-settings': `'wght' 600` } ],
    [ 'font-650', { 'font-variation-settings': `'wght' 650` } ],
    [ 'font-700', { 'font-variation-settings': `'wght' 700` } ],
    [ 'font-750', { 'font-variation-settings': `'wght' 750` } ],
    [ 'font-800', { 'font-variation-settings': `'wght' 800` } ],
    [ 'font-850', { 'font-variation-settings': `'wght' 850` } ],
    [ 'font-900', { 'font-variation-settings': `'wght' 900` } ]
  ]
}
