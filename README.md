# ESLint Config

Preferred ESLint configs for myself.

## For TypeScript

The base config, inherits [eslint-recommended](https://eslint.org/docs/latest/rules/).

### Install

```bash
yarn add -D @brownsugar/eslint-config-typescript
# or
pnpm add -D @brownsugar/eslint-config-typescript
```

### .eslintrc

```json
{
  "root": true,
  "extends": [
    "@brownsugar/typescript"
  ]
}
```

## For Vue 3

The config to use with TypeScript, inherits `@brownsugar/typescript`.

### Install

```bash
yarn add -D @brownsugar/eslint-config-vue
# or
pnpm add -D @brownsugar/eslint-config-vue
```

### .eslintrc

```json
{
  "root": true,
  "extends": [
    "@brownsugar/vue"
  ]
}
```

## For Nuxt 3

The config to use with TypeScript, inherits `@brownsugar/vue`.

### Install

```bash
yarn add -D @brownsugar/eslint-config-nuxt
# or
pnpm add -D @brownsugar/eslint-config-nuxt
```

### .eslintrc

```json
{
  "root": true,
  "extends": [
    "@brownsugar/nuxt"
  ]
}
```
