import tsRules from './typescript'
// @ts-expect-error no types provided
import pluginVue from 'eslint-plugin-vue'
import tsEslint from 'typescript-eslint'
import type { Linter } from 'eslint'

export default <Linter.FlatConfig<Linter.RulesRecord>[]>[
  ...tsRules,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
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
  },
]
