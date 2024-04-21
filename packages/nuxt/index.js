const vueRules = require('../vue')
const { createConfigForNuxt } = require('@nuxt/eslint-config/flat')

module.exports = createConfigForNuxt()
  .prepend(
    ...vueRules,
  )
