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

export async function tryReactiveCompact(
  _params: unknown,
): Promise<null> {
  return null
}

export async function reactiveCompactOnPromptTooLong(
  _messages: unknown,
  _cacheSafeParams: unknown,
  _options: unknown,
): Promise<{ ok: false; reason: 'error' }> {
  return { ok: false, reason: 'error' }
}
