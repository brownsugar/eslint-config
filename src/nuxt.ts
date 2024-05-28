import vueRules from './vue'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import type { NuxtESLintConfigOptions } from '@nuxt/eslint-config/flat'

export default async (options?: NuxtESLintConfigOptions) =>
  await createConfigForNuxt(options)
    .prepend(
      ...vueRules,
    )
    .override('nuxt/vue/rules', {
      rules: {
        'vue/brace-style': 'error',
      },
    })
    .toConfigs()
