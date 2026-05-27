export const McpbManifestSchema = {
  safeParse(value) {
    return { success: true, data: value }
  },
}

export function getMcpConfigForManifest() {
  return { mcpServers: {} }
}
