export type ServerInfo = {
  name: string
  transport: string
  client?: unknown
  scope?: string
  config?: unknown
  isAuthenticated?: boolean
  [key: string]: unknown
}

export type StdioServerInfo = ServerInfo & {
  transport: 'stdio'
}

export type ClaudeAIServerInfo = ServerInfo & {
  transport: 'claudeai-proxy'
}

export type HTTPServerInfo = ServerInfo & {
  transport: 'http'
}

export type SSEServerInfo = ServerInfo & {
  transport: 'sse'
}

export type AgentMcpServerInfo = {
  name: string
  scope?: string
  [key: string]: unknown
}

export type MCPViewState =
  | { type: 'list' }
  | { type: 'server'; server: ServerInfo }
  | { type: 'agent-server'; agentServer: AgentMcpServerInfo }
  | { type: 'tool-list'; server: ServerInfo }
  | { type: 'tool-detail'; server: ServerInfo; tool: unknown }
  | { type: string; [key: string]: unknown }
