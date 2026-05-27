export function isSnipRuntimeEnabled(): boolean {
  return false
}

export function shouldNudgeForSnips(_messages: unknown[]): boolean {
  return false
}

export function isSnipMarkerMessage(message: unknown): boolean {
  return (message as { subtype?: string } | null)?.subtype === 'snip_marker'
}

export function snipCompactIfNeeded<T>(
  messages: T[],
  _options?: { force?: boolean },
): {
  messages: T[]
  tokensFreed: number
  boundaryMessage?: undefined
  executed: boolean
} {
  return {
    messages,
    tokensFreed: 0,
    boundaryMessage: undefined,
    executed: false,
  }
}
