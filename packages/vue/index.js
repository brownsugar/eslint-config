module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    extraFileExtensions: ['.vue']
  },
  extends: [
    '@brownsugar/typescript',
    'plugin:vue/vue3-recommended'
  ]
}
