module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn lint:eslint && yarn lint:stylelint',
    'pre-push': 'yarn lint:eslint && yarn lint:stylelint'
  }
}
