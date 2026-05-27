let assistantForced = false

export function markAssistantForced(): void {
  assistantForced = true
}

export function isAssistantForced(): boolean {
  return assistantForced
}

export function isAssistantMode(): boolean {
  return assistantForced
}

export async function initializeAssistantTeam(): Promise<Record<string, never>> {
  return {}
}

export function getAssistantSystemPromptAddendum(): string {
  return ''
}

export function getAssistantActivationPath(): string {
  return assistantForced ? 'forced' : 'disabled'
}
