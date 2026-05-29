import vueRules from './vue'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import type { NuxtESLintConfigOptions } from '@nuxt/eslint-config/flat'
import type { Linter } from 'eslint'

export default async (options?: NuxtESLintConfigOptions): Promise<Linter.Config<Linter.RulesRecord>[]> =>
  await createConfigForNuxt(options)
    .prepend(
      ...vueRules as Linter.Config[],
    )
    .override('nuxt/vue/rules', {
      rules: {
        'vue/brace-style': 'error',
      },
    })
    .toConfigs()
