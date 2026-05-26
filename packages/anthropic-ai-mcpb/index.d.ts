export type McpbUserConfigurationOption = {
  key: string
  label?: string
  required?: boolean
  description?: string
}

export type McpbManifest = {
  name?: string
  version?: string
  userConfiguration?: McpbUserConfigurationOption[]
  [key: string]: unknown
}

export declare const McpbManifestSchema: {
  safeParse<T>(value: T): { success: true; data: T }
}

export declare function getMcpConfigForManifest(
  ...args: unknown[]
): { mcpServers: Record<string, unknown> }
