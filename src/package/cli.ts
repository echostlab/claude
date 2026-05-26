import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Command } from 'commander'

const PACKAGE_VERSION = '0.0.0-source'

function getRepoRoot(): string {
  const distDir = dirname(fileURLToPath(import.meta.url))
  return resolve(distDir, '..')
}

function getRequiredMirrorPaths(repoRoot: string): string[] {
  return [
    'README.md',
    'package.json',
    'scripts/create-stub-modules.mjs',
    'src/main.tsx',
    'src/entrypoints/cli.tsx',
  ].map((relativePath) => join(repoRoot, relativePath))
}

function assertMirrorLayout(repoRoot: string): void {
  const missing = getRequiredMirrorPaths(repoRoot).filter((filePath) => !existsSync(filePath))

  if (missing.length > 0) {
    throw new Error(`Mirror layout is incomplete. Missing: ${missing.join(', ')}`)
  }
}

const program = new Command()

program
  .name('claude')
  .description('Buildable CLI wrapper for the Claude Code source mirror package.')
  .version(PACKAGE_VERSION)

program
  .command('check')
  .description('Verify that the packaged source mirror layout is present.')
  .action(() => {
    const repoRoot = getRepoRoot()
    assertMirrorLayout(repoRoot)
    process.stdout.write(`Source mirror OK at ${repoRoot}\n`)
  })

program.action(() => {
  const repoRoot = getRepoRoot()
  assertMirrorLayout(repoRoot)
  process.stdout.write('Claude Code source mirror package\n')
  process.stdout.write(`Repository root: ${repoRoot}\n`)
  process.stdout.write('Use `claude check` to validate the packaged mirror contents.\n')
})

await program.parseAsync(process.argv)
