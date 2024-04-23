import globals from 'globals'
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

export default <Linter.FlatConfig<Linter.RulesRecord>[]>[
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  // TypeScript rules
  ...tsEslint.config({
    files: ['**/*.ts', '**/*.vue'],
    extends: [
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
    ],
    rules: {
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
    },
  }),
  // Stylistic rules
  stylistic.configs['recommended-flat'],
  {
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/brace-style': 'error',
      '@stylistic/func-call-spacing': 'error',
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/space-before-function-paren': 'error',
    },
  },
  // General rules
  eslint.configs.recommended,
  {
    rules: {
      camelcase: 'error',
      curly: ['error', 'multi-or-nest'],
      eqeqeq: 'error',
      'no-alert': 'error',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-use-before-define': 'off',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      // No default export found in imported module "*".
      'import/default': 'off',
    },
  },
]
