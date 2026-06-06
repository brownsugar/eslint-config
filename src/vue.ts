import { defineConfig } from 'eslint/config'
import tsConfig from './typescript'
import pluginVue from 'eslint-plugin-vue'
import { parser as tsEslintParser } from 'typescript-eslint'
import type { Linter } from 'eslint'

export const vueRules: Linter.RulesRecord = {
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
}

export default defineConfig([
  ...tsConfig,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsEslintParser,
        extraFileExtensions: ['.vue'],
      },
    },
    rules: vueRules,
  },
])
