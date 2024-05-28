import vueRules from './vue'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default await createConfigForNuxt({
  dirs: {
    src: ['src'],
  },
})
  .prepend(
    ...vueRules,
  ).toConfigs()
