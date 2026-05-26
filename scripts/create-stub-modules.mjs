import { access, mkdir, writeFile } from 'fs/promises'
import path from 'path'

const root = process.cwd()
const nodeModulesDir = path.join(root, 'node_modules')

const stubs = [
  {
    name: '@anthropic-ai/sandbox-runtime',
    files: {
      'package.json': JSON.stringify(
        {
          name: '@anthropic-ai/sandbox-runtime',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `export class SandboxManager {
  async create() {
    return null
  }
}

export const SandboxRuntimeConfigSchema = {
  parse(value) {
    return value
  },
  safeParse(value) {
    return { success: true, data: value }
  },
}

export class SandboxViolationStore {
  constructor() {
    this.violations = []
  }

  add(violation) {
    this.violations.push(violation)
  }

  list() {
    return [...this.violations]
  }
}
`,
      'index.d.ts': `export declare class SandboxManager {
  create(): Promise<null>
}

export declare const SandboxRuntimeConfigSchema: {
  parse<T>(value: T): T
  safeParse<T>(value: T): { success: true; data: T }
}

export declare class SandboxViolationStore {
  add(violation: unknown): void
  list(): unknown[]
}
`,
    },
  },
  {
    name: '@ant/claude-for-chrome-mcp',
    files: {
      'package.json': JSON.stringify(
        {
          name: '@ant/claude-for-chrome-mcp',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `export const BROWSER_TOOLS = []

export function createClaudeForChromeMcpServer() {
  return {
    async start() {},
    async stop() {},
    close() {},
  }
}
`,
      'index.d.ts': `export declare const BROWSER_TOOLS: string[]

export type ClaudeForChromeContext = Record<string, unknown>
export type Logger = {
  debug?: (...args: unknown[]) => void
  info?: (...args: unknown[]) => void
  warn?: (...args: unknown[]) => void
  error?: (...args: unknown[]) => void
}
export type PermissionMode = string

export declare function createClaudeForChromeMcpServer(...args: unknown[]): {
  start(): Promise<void>
  stop(): Promise<void>
  close(): void
}
`,
    },
  },
  {
    name: '@anthropic-ai/foundry-sdk',
    files: {
      'package.json': JSON.stringify(
        {
          name: '@anthropic-ai/foundry-sdk',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `export class AnthropicFoundry {}
`,
      'index.d.ts': `export declare class AnthropicFoundry {}
`,
    },
  },
  {
    name: '@anthropic-ai/mcpb',
    files: {
      'package.json': JSON.stringify(
        {
          name: '@anthropic-ai/mcpb',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `export const McpbManifestSchema = {
  parse(value) {
    return value
  },
  safeParse(value) {
    return { success: true, data: value }
  },
}

export function getMcpConfigForManifest() {
  return {}
}
`,
      'index.d.ts': `export type McpbManifest = Record<string, unknown>
export type McpbUserConfigurationOption = Record<string, unknown>

export declare const McpbManifestSchema: {
  parse<T>(value: T): T
  safeParse<T>(value: T): { success: true; data: T }
}

export declare function getMcpConfigForManifest(...args: unknown[]): Record<string, unknown>
`,
    },
  },
  {
    name: 'color-diff-napi',
    files: {
      'package.json': JSON.stringify(
        {
          name: 'color-diff-napi',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `export class ColorDiff {}
export class ColorFile {}

export function getSyntaxTheme() {
  return null
}
`,
      'index.d.ts': `export type SyntaxTheme = Record<string, unknown> | null
export declare class ColorDiff {}
export declare class ColorFile {}
export declare function getSyntaxTheme(themeName: string): SyntaxTheme
`,
    },
  },
  {
    name: 'modifiers-napi',
    files: {
      'package.json': JSON.stringify(
        {
          name: 'modifiers-napi',
          version: '0.0.0-stub',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `module.exports = {
  prewarm() {},
  isModifierPressed() {
    return false
  },
}
`,
      'index.d.ts': `export declare function prewarm(): void
export declare function isModifierPressed(modifier: string): boolean
`,
    },
  },
  {
    name: 'image-processor-napi',
    files: {
      'package.json': JSON.stringify(
        {
          name: 'image-processor-napi',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `function unsupportedSharp() {
  throw new Error('image-processor-napi stub: native image processing is unavailable')
}

export const sharp = unsupportedSharp
export default unsupportedSharp

export function getNativeModule() {
  return {
    hasClipboardImage() {
      return false
    },
    readClipboardImage() {
      return null
    },
  }
}
`,
      'index.d.ts': `export declare const sharp: (...args: unknown[]) => never
export default sharp
export declare function getNativeModule(): {
  hasClipboardImage(): boolean
  readClipboardImage(...args: unknown[]): null
}
`,
    },
  },
  {
    name: 'url-handler-napi',
    files: {
      'package.json': JSON.stringify(
        {
          name: 'url-handler-napi',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `export function waitForUrlEvent() {
  return null
}
`,
      'index.d.ts': `export declare function waitForUrlEvent(timeoutMs?: number): string | null
`,
    },
  },
  {
    name: 'audio-capture-napi',
    files: {
      'package.json': JSON.stringify(
        {
          name: 'audio-capture-napi',
          version: '0.0.0-stub',
          type: 'module',
          main: './index.js',
        },
        null,
        2,
      ),
      'index.js': `let active = false

export function isNativeAudioAvailable() {
  return false
}

export function isNativeRecordingActive() {
  return active
}

export function startNativeRecording() {
  active = false
  return false
}

export function stopNativeRecording() {
  active = false
}
`,
      'index.d.ts': `export declare function isNativeAudioAvailable(): boolean
export declare function isNativeRecordingActive(): boolean
export declare function startNativeRecording(
  onData: (data: Buffer) => void,
  onEnd: () => void,
): boolean
export declare function stopNativeRecording(): void
`,
    },
  },
]

async function exists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function writeStub(stub) {
  const packageDir = path.join(nodeModulesDir, ...stub.name.split('/'))
  const packageJsonPath = path.join(packageDir, 'package.json')

  if (await exists(packageJsonPath)) {
    return
  }

  await mkdir(packageDir, { recursive: true })

  await Promise.all(
    Object.entries(stub.files).map(async ([relativePath, content]) => {
      const targetPath = path.join(packageDir, relativePath)
      await mkdir(path.dirname(targetPath), { recursive: true })
      await writeFile(targetPath, content)
    }),
  )
}

await mkdir(nodeModulesDir, { recursive: true })
await Promise.all(stubs.map(writeStub))
