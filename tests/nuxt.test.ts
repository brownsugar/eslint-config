import { describe, it, expect, beforeAll } from 'vitest'
import type { Linter } from 'eslint'
import nuxtConfigFn from '../src/nuxt'
import { lintCode, getResolvedRules } from './utils'

describe('nuxt config rules', () => {
  let nuxtConfig: Linter.Config[]

  beforeAll(async () => {
    nuxtConfig = await nuxtConfigFn({ features: { import: false } })
  })

  it('full resolved rules for .ts and .vue files match snapshot', async () => {
    const tsRules = await getResolvedRules(nuxtConfig, 'test.ts')
    const vueFileRules = await getResolvedRules(nuxtConfig, 'test.vue')
    expect({ ts: tsRules, vue: vueFileRules }).toMatchSnapshot()
  })

  it.each<[rule: string, invalid: string, valid: string, file: string]>([
    // nuxt/rules override
    ['nuxt/prefer-import-meta',
      'export const isClient = process.client\n',
      'export const isClient = import.meta.client\n',
      'test.ts'],
    // nuxt/vue/rules override — vue/brace-style applies to <template> expressions
    ['vue/brace-style',
      '<template>\n  <div @click="function handler()\n  { count++ }">click</div>\n</template>\n',
      '<template>\n  <div @click="function handler() {\n    count++\n  }">click</div>\n</template>\n',
      'test.vue'],
  ])('%s', async (rule, invalid, valid, file) => {
    const errors = await lintCode(nuxtConfig, invalid, file)
    expect(
      errors.filter(m => m.ruleId === rule).length,
      `"${rule}" should report at least one error for invalid code`,
    ).toBeGreaterThan(0)

    const clean = await lintCode(nuxtConfig, valid, file)
    expect(
      clean.filter(m => m.ruleId === rule).length,
      `"${rule}" should report no errors for valid code`,
    ).toBe(0)
  })
})
