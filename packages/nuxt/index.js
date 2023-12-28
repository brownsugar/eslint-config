const { parserOptions, overrides } = require('@nuxt/eslint-config')

module.exports = {
  parserOptions,
  extends: [
    '@brownsugar/vue',
  ],
  overrides,
}
