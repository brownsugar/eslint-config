module.exports = {
  parserOptions: {
    extraFileExtensions: ['.vue']
  },
  extends: [
    '@brownsugar/typescript',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    // Vue rules
    'vue/max-attributes-per-line': ['error', {
      singleline: 1
    }],

    // Disable rules for Vue 2
    'vue/no-custom-modifiers-on-v-model': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/valid-model-definition': 'off',
    'vue/valid-v-bind-sync': 'off'
  }
}
