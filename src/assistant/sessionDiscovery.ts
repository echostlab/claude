export type AssistantSession = {
  id: string
  title?: string
  cwd?: string
  updatedAt?: string
}

export async function discoverAssistantSessions(): Promise<AssistantSession[]> {
  return []
}
