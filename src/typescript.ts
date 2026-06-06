import { defineConfig } from 'eslint/config'
import globals from 'globals'
import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import { configs as tsEslintConfigs } from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

export const baseRules: Linter.RulesRecord = {
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
}

export const typescriptRules: Linter.RulesRecord = {
  // Pending support for ESLint v10
  // 'import/order': 'error',
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

export const stylisticRules: Linter.RulesRecord = {
  '@stylistic/arrow-parens': ['error', 'as-needed'],
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/quote-props': ['error', 'as-needed'],
}

export default defineConfig([
  {
    ignores: ['**/dist'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  // Base rules
  eslint.configs.recommended,
  {
    rules: baseRules,
  },
  // TypeScript rules
  {
    files: ['**/*.{ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    extends: [
      ...tsEslintConfigs.recommended,
      ...tsEslintConfigs.stylistic,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: typescriptRules,
  },
  // Stylistic rules
  stylistic.configs.customize(),
  {
    rules: stylisticRules,
  },
])
