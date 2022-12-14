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
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',

    // Use TS rules instead of JS rules
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    'no-use-before-define': 'off',

    // Quotes
    'quote-props': ['error', 'as-needed'],
    // Brace style
    curly: ['error', 'multi-or-nest'],
    // No default export found in imported module "*".
    'import/default': 'off'
  }
}
