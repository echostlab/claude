import { mkdir, lstat, symlink, unlink } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))
const rgPath = Bun.which('rg')

if (!rgPath) {
  console.warn('ripgrep not found in PATH; skipping dist/vendor symlink')
  process.exit(0)
}

const platformName =
  process.platform === 'darwin'
    ? 'darwin'
    : process.platform === 'linux'
      ? 'linux'
      : null

if (!platformName) {
  console.warn(`unsupported platform ${process.platform}; skipping rg symlink`)
  process.exit(0)
}

const linkPath = join(
  rootDir,
  'dist',
  'vendor',
  'ripgrep',
  `${process.arch}-${platformName}`,
  'rg',
)

await mkdir(dirname(linkPath), { recursive: true })

try {
  await lstat(linkPath)
  await unlink(linkPath)
} catch {
  // No existing link.
}

await symlink(rgPath, linkPath)
console.log(`linked ${linkPath} -> ${rgPath}`)
