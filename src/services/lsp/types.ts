export type ScopedLspServerConfig = {
  name?: string
  [key: string]: unknown
}

export type LspServerState = 'starting' | 'running' | 'stopped' | 'error' | string
