import path from 'node:path'
import { ESLint } from 'eslint'
import type { Linter } from 'eslint'

export async function lintCode(
  config: Linter.Config[],
  code: string,
  filePath: string,
): Promise<ESLint.LintMessage[]> {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  })
  const [result] = await eslint.lintText(code, { filePath })
  return result.messages
}

export async function getResolvedRules(
  config: Linter.Config[],
  filePath: string,
): Promise<Record<string, unknown>> {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  })
  const result = await eslint.calculateConfigForFile(path.resolve(filePath))
  return result.rules ?? {}
}
