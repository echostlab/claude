let assistantForced = false

export function markAssistantForced(): void {
  assistantForced = true
}

export function isAssistantForced(): boolean {
  return assistantForced
}

export function isAssistantMode(): boolean {
  return (
    assistantForced ||
    process.argv.includes('--assistant') ||
    process.env.CLAUDE_ASSISTANT_MODE === '1'
  )
}

export async function initializeAssistantTeam(): Promise<null> {
  return null
}

export function getAssistantSystemPromptAddendum(): string {
  return 'Assistant-only capabilities are stubbed in this source build.'
}
