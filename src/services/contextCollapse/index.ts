export function initContextCollapse(): void {}

export function isContextCollapseEnabled(): boolean {
  return false
}

export function isWithheldPromptTooLong(): boolean {
  return false
}

export async function applyCollapsesIfNeeded(messages: any[]): Promise<{
  messages: any[]
}> {
  return { messages }
}

export function recoverFromOverflow(messages: any[]): {
  messages: any[]
  committed: number
} {
  return { messages, committed: 0 }
}

export const collapseContext = async () => null
export const getContextCollapse = () => ({
  initContextCollapse,
  isContextCollapseEnabled,
  isWithheldPromptTooLong,
  applyCollapsesIfNeeded,
  recoverFromOverflow,
})
