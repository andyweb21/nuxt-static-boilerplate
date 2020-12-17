module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],

  plugins: [],

  rules: {
    'color-named': 'never',
    'color-no-hex': true,

    'no-empty-source': null,

    'string-no-newline': null,

    'selector-max-universal': 1,

    // TailwindCSS
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'responsive',
          'media',
          'screen',
          'mixin',
          'include',
          'extend'
        ]
      }
    ],

    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
}
