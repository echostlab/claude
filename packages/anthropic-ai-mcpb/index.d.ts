export type McpbUserConfigurationOption = {
  key: string
  type?: string
  title?: string
  label?: string
  required?: boolean
  description?: string
  default?: unknown
  sensitive?: boolean
  secret?: boolean
  multiple?: boolean
  choices?: unknown[]
  [key: string]: unknown
}

export type McpbManifest = {
  name?: string
  version?: string
  displayName?: string
  description?: string
  author?: string
  userConfiguration?:
    | McpbUserConfigurationOption[]
    | Record<string, McpbUserConfigurationOption>
  mcpServers?: Record<string, unknown>
  [key: string]: unknown
}

export declare const McpbManifestSchema: {
  safeParse(value: unknown):
    | { success: true; data: McpbManifest }
    | { success: false; error: unknown }
}

export declare function getMcpConfigForManifest(
  ...args: any[]
): Promise<{ mcpServers: Record<string, unknown> }> | { mcpServers: Record<string, unknown> }
