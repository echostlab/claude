import type { ScopedMcpServerConfig } from '../../services/mcp/types.js'

export type ServerInfo = {
  name: string
  scope?: string
  config?: ScopedMcpServerConfig | Record<string, unknown>
  client?: unknown
  isAuthenticated?: boolean
  transport?: string
  url?: string
  command?: string
  sourceAgents?: string[]
  needsAuth?: boolean
  [key: string]: unknown
}

export type StdioServerInfo = ServerInfo
export type ClaudeAIServerInfo = ServerInfo
export type HTTPServerInfo = ServerInfo
export type SSEServerInfo = ServerInfo
export type AgentMcpServerInfo = ServerInfo

export type MCPViewState = {
  type: string
  server?: ServerInfo
  [key: string]: unknown
}
