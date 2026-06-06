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
      'export const my_snake_case = 1\n',
      'export const myVar = 1\n'],
    ['curly',
      'export function f() {\n  if (true) {\n    return 1\n  }\n}\n',
      'export function f() {\n  if (true)\n    return 1\n}\n'],
    ['eqeqeq',
      'export const x = (1 == 1)\n',
      'export const x = (1 === 1)\n'],
    ['no-alert',
      'alert("hi")\n',
      'export const x = 1\n'],
    ['no-console',
      'console.log("test")\n',
      'console.warn("test")\n'],
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
    ['@typescript-eslint/no-empty-object-type',
      'export interface Foo {}\n',
      'export interface Foo { id: number }\n'],
    ['@typescript-eslint/no-unused-vars',
      'const myUnused = 1\nexport {}\n',
      'export const myUsed = 1\n'],
    // stylistic rules
    ['@stylistic/arrow-parens',
      'export const fn = (x) => x\n',
      'export const fn = x => x\n'],
    ['@stylistic/brace-style',
      'export function foo()\n{\n  return 1\n}\n',
      'export function foo() {\n  return 1\n}\n'],
    ['@stylistic/function-call-spacing',
      'function foo() {}\nexport const x = foo ()\n',
      'function foo() {}\nexport const x = foo()\n'],
    ['@stylistic/quote-props',
      'export const obj = { \'foo\': 1 }\n',
      'export const obj = { foo: 1 }\n'],
  ])('%s', async (rule, invalid, valid) => {
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
