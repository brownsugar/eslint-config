module.exports = {
  extends: [
    '@brownsugar/vue',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    // Override Vue rules
    'vue/max-attributes-per-line': ['error', {
      singleline: 1
    }]
  }
}
