import vueConfig from './vue'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import type { NuxtESLintConfigOptions } from '@nuxt/eslint-config/flat'
import type { Linter } from 'eslint'

export const nuxtRules: Linter.RulesRecord = {
  'vue/brace-style': 'error',
}

export default async (options?: NuxtESLintConfigOptions): Promise<Linter.Config<Linter.RulesRecord>[]> =>
  await createConfigForNuxt(options)
    .prepend(
      ...vueConfig as Linter.Config[],
    )
    .override('nuxt/vue/rules', {
      rules: nuxtRules,
    })
    .toConfigs()
