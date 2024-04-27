import vueRules from './vue'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default await createConfigForNuxt()
  .prepend(
    ...vueRules,
  ).toConfigs()
