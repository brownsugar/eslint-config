# ESLint Config

[![Publish NPM Package](https://github.com/brownsugar/eslint-config/actions/workflows/main.yml/badge.svg)](https://github.com/brownsugar/eslint-config/actions/workflows/main.yml)

Preferred ESLint configs for myself.

### Install

```bash
yarn add -D @brownsugar/eslint-config
# or
pnpm add -D @brownsugar/eslint-config
```

## For TypeScript

The base config, inherits below rule sets with some custom rules.
 - [ESLint recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
 - [ESLint Stylistic recommended](https://github.com/eslint-community/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts)
 - [TypeScript recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/typescript-eslint/src/configs/recommended.ts)
 - [TypeScript Stylistic](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/typescript-eslint/src/configs/stylistic.ts)

### eslint.config.cjs

```javascript
const brownsugarConfig = require('@brownsugar/eslint-config/typescript')
module.exports = brownsugarConfig
```

### eslint.config.mjs

```javascript
import brownsugarConfig from '@brownsugar/eslint-config/typescript'
export default brownsugarConfig
```

## For Vue 3

The config to use with TypeScript, inherits `@brownsugar/eslint-config/typescript` with [Vue 3 recommended](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/flat/vue3-recommended.js).

### eslint.config.cjs

```javascript
const brownsugarConfig = require('@brownsugar/eslint-config/vue')
module.exports = brownsugarConfig
```

### eslint.config.mjs

```javascript
import brownsugarConfig from '@brownsugar/eslint-config/vue'
export default brownsugarConfig
```

## For Nuxt 3

The config to use with TypeScript, inherits `@brownsugar/eslint-config/vue` with [Nuxt 3 config](https://github.com/nuxt/eslint/blob/main/packages/eslint-config/src/flat/index.ts).
### eslint.config.cjs

```javascript
// Not supported
```

### eslint.config.mjs

```javascript
import brownsugarConfig from '@brownsugar/eslint-config/nuxt'
export default brownsugarConfig
```
