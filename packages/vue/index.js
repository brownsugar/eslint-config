module.exports = {
  parserOptions: {
    extraFileExtensions: ['.vue'],
  },
  extends: [
    '@brownsugar/typescript',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'SLOT',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'CONTENT',
        'ATTR_DYNAMIC',
        'ATTR_STATIC',
        'ATTR_SHORTHAND_BOOL',
        'EVENTS',
      ],
    }],
  },
}
