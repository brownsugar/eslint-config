module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    '@stylistic/ts',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    // Require `parserOptions.project` set
    // "plugin:@typescript-eslint/recommended-type-checked",
    // "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // Common rules
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // Stylistic rules
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'comma',
        },
      },
    ],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/ts/indent': ['error', 2],
    '@stylistic/ts/func-call-spacing': 'error',

    curly: ['error', 'multi-or-nest'],
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'quote-props': ['error', 'as-needed'],
    // No default export found in imported module "*".
    'import/default': 'off',
  },
}
