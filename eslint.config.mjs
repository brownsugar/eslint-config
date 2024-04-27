import rules from './dist/typescript.mjs'

export default [
  {
    ignores: ['**/dist/'],
  },
  ...rules,
]
