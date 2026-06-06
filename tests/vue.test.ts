import { describe, it, expect } from 'vitest'
import vueConfig from '../src/vue'
import { lintCode, getResolvedRules } from './utils'

describe('vue config', () => {
  it('full resolved rules for .vue files match snapshot', async () => {
    const rules = await getResolvedRules(vueConfig, 'test.vue')
    expect(rules).toMatchSnapshot()
  })
})

describe('vue config rules', () => {
  it.each<[rule: string, invalid: string, valid: string]>([
    ['vue/attributes-order',
      '<template>\n  <div @click="() => {}" v-if="true">text</div>\n</template>\n',
      '<template>\n  <div v-if="true" @click="() => {}">text</div>\n</template>\n'],
  ])('%s', async (rule, invalid, valid) => {
    const errors = await lintCode(vueConfig, invalid, 'test.vue')
    expect(
      errors.filter(m => m.ruleId === rule).length,
      `"${rule}" should report at least one error for invalid code`,
    ).toBeGreaterThan(0)

    const clean = await lintCode(vueConfig, valid, 'test.vue')
    expect(
      clean.filter(m => m.ruleId === rule).length,
      `"${rule}" should report no errors for valid code`,
    ).toBe(0)
  })
})
