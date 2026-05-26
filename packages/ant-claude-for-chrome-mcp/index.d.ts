export type PermissionMode = 'default' | 'acceptEdits' | 'bypassPermissions'

export type Logger = {
  debug?: (...args: unknown[]) => void
  info?: (...args: unknown[]) => void
  warn?: (...args: unknown[]) => void
  error?: (...args: unknown[]) => void
}

export type ClaudeForChromeContext = Record<string, unknown>

export declare const BROWSER_TOOLS: Array<{ name: string }>

export declare function createClaudeForChromeMcpServer(
  ...args: unknown[]
): {
  connect(): Promise<void>
  close(): void
}
