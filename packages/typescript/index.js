module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // Require `parserOptions.project` set
    // "plugin:@typescript-eslint/recommended-requiring-type-checking"
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    // Common rules
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    // Types declaration
    'no-use-before-define': ['error', { typedefs: false }],

    // Use TS rules instead of JS rules
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',

    // Quotes
    'quote-props': ['error', 'as-needed'],
    // No default export found in imported module "*".
    'import/default': 'off'
  }
}
