import { defineConfig } from 'eslint/config'
import globals from 'globals'
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

const baseRules: Linter.RulesRecord = {
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
  'no-object-constructor': 'error',
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
}

const typescriptRules: Linter.RulesRecord = {
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-empty-object-type': [
    'error',
    {
      allowInterfaces: 'with-single-extends',
    },
  ],
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
}

const stylisticRules: Linter.RulesRecord = {
  '@stylistic/arrow-parens': ['error', 'as-needed'],
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/quote-props': ['error', 'as-needed'],
}

export default defineConfig([
  {
    ignores: ['**/dist'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  // General rules
  eslint.configs.recommended,
  {
    rules: baseRules,
  },
  // TypeScript rules
  {
    files: ['**/*.ts', '**/*.vue'],
    extends: [
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
    ],
    rules: typescriptRules,
  },
  // Stylistic rules
  // @ts-ignore
  stylistic.configs.customize(),
  {
    rules: stylisticRules,
  },
])
