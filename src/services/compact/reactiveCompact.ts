export function isReactiveCompactEnabled(): boolean {
  return false
}

export function isReactiveOnlyMode(): boolean {
  return false
}

export function isWithheldPromptTooLong(_message: unknown): boolean {
  return false
}

export function isWithheldMediaSizeError(_message: unknown): boolean {
  return false
}

export async function tryReactiveCompact(_input: unknown): Promise<null> {
  return null
}

export async function reactiveCompactOnPromptTooLong(): Promise<{
  ok: false
  reason: 'exhausted'
}> {
  return {
    ok: false,
    reason: 'exhausted',
  }
}
