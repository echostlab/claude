export type ScopedLspServerConfig = {
  scope?: string
  [key: string]: unknown
}

export type LspServerState = 'stopped' | 'starting' | 'running' | 'error'
