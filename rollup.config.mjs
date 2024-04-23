import typescript from 'rollup-plugin-typescript2'

const sets = ['typescript', 'vue', 'nuxt']
export default sets.map(set => ({
  input: `src/${set}.ts`,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].mjs',
    },
  ],
  plugins: [
    typescript(),
  ],
}))
