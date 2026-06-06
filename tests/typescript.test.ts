import { describe, it, expect } from 'vitest'
import tsConfig from '../src/typescript'
import { lintCode, getResolvedRules } from './utils'

describe('typescript config', () => {
  it('full resolved rules for .ts files match snapshot', async () => {
    const rules = await getResolvedRules(tsConfig, 'test.ts')
    expect(rules).toMatchSnapshot()
  })
})

describe('typescript config rules', () => {
  it.each<[rule: string, invalid: string, valid: string]>([
    // base rules
    ['camelcase',
      'export const my_val = 1\n',
      'export const myVal = 1\n'],
    ['curly', // 'multi-or-nest': unnecessary braces around single-statement body
      'export function f() {\n  if (true) {\n    return 1\n  }\n}\n',
      'export function f() {\n  if (true)\n    return 1\n}\n'],
    ['curly', // 'multi-or-nest': body expression spanning multiple lines requires braces
      'if (x)\n  (doA(),\n  doB())\n',
      'if (x) {\n  doA()\n  doB()\n}\n'],
    ['eqeqeq',
      'export const x = (1 == 1)\n',
      'export const x = (1 === 1)\n'],
    ['no-alert',
      'alert("hi")\n',
      'export const x = 1\n'],
    ['no-console', // allow: ['warn', 'error']
      'console.log("test")\n',
      'console.warn("test")\n'],
    ['no-console', // allow: ['warn', 'error']
      'console.log("test")\n',
      'console.error("test")\n'],
    ['no-new-func',
      'export const f = new Function("return 1")\n',
      'export function f() { return 1 }\n'],
    ['no-object-constructor',
      'export const o = new Object()\n',
      'export const o = {}\n'],
    ['no-self-compare',
      'const x = 1\nexport const r = (x === x)\n',
      'const x = 1\nconst y = 2\nexport const r = (x === y)\n'],
    ['no-sequences',
      'if (doA(), doB()) {}\nexport {}\n',
      'doA()\nif (doB()) {}\nexport {}\n'],
    ['no-throw-literal',
      'export function f() { throw "error" }\n',
      'export function f() { throw new Error("error") }\n'],
    ['no-undef-init',
      'let x = undefined\nexport { x }\n',
      'let x\nexport { x }\n'],
    ['no-unmodified-loop-condition',
      'let flag = true\nwhile (flag) { const x = 1 }\n',
      'let flag = true\nwhile (flag) { flag = false }\n'],
    ['no-unneeded-ternary',
      'export const x = true ? true : false\n',
      'export const x = Boolean(true)\n'],
    ['no-useless-constructor',
      'export class Foo {\n  constructor() {}\n}\n',
      'export class Foo {\n  constructor(private x: number) {}\n}\n'],
    ['no-useless-rename',
      'const obj = { a: 1 }\nconst { a: a } = obj\nexport { a }\n',
      'const obj = { a: 1 }\nconst { a: b } = obj\nexport { b }\n'],

    // typescript rules
    ['@typescript-eslint/no-empty-object-type', // allowInterfaces: 'with-single-extends'
      'export interface Foo {}\n',
      'export interface Foo extends Record<string, unknown> {}\n'],
    ['@typescript-eslint/no-unused-vars', // args: 'after-used'
      'export function f(used: number, notUsed: number) { return used }\n',
      'export function f(notUsed: number, used: number) { return used }\n'],
    ['@typescript-eslint/no-unused-vars', // argsIgnorePattern: '^_'
      'export function f(used: number, notUsed: number) { return used }\n',
      'export function f(used: number, _notUsed: number) { return used }\n'],
    ['@typescript-eslint/no-unused-vars', // varsIgnorePattern: '^_'
      'const myUnused = 1\nexport {}\n',
      'const _unused = 1\nexport {}\n'],

    // stylistic rules
    ['@stylistic/arrow-parens', // 'as-needed': single param
      'export const fn = (x) => x\n',
      'export const fn = x => x\n'],
    ['@stylistic/arrow-parens', // 'as-needed': multiple params
      'export const fn = (x) => x\n',
      'export const fn = (x, y) => x + y\n'],
    ['@stylistic/brace-style',
      'export function foo()\n{\n  return 1\n}\n',
      'export function foo() {\n  return 1\n}\n'],
    ['@stylistic/function-call-spacing',
      'function foo() {}\nexport const x = foo ()\n',
      'function foo() {}\nexport const x = foo()\n'],
    ['@stylistic/quote-props', // 'as-needed': identifier key
      'export const obj = { \'foo\': 1 }\n',
      'export const obj = { foo: 1 }\n'],
    ['@stylistic/quote-props', // 'as-needed': non-identifier key
      'export const obj = { \'foo\': 1 }\n',
      'export const obj = { \'foo-bar\': 1 }\n'],
  ])('%s — invalid triggers error, valid stays clean', async (rule, invalid, valid) => {
    const errors = await lintCode(tsConfig, invalid, 'test.ts')
    expect(
      errors.filter(m => m.ruleId === rule).length,
      `"${rule}" should report at least one error for invalid code`,
    ).toBeGreaterThan(0)

    const clean = await lintCode(tsConfig, valid, 'test.ts')
    expect(
      clean.filter(m => m.ruleId === rule).length,
      `"${rule}" should report no errors for valid code`,
    ).toBe(0)
  })
})
