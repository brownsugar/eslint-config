import vueRules from './vue'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt()
  .prepend(
    ...vueRules,
  ).toConfigs()
