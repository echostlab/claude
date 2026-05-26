export type SnipCompactResult = {
  messages: any[]
  tokensFreed: number
  boundaryMessage?: any
}

export function snipCompactIfNeeded(messages: any[]): SnipCompactResult {
  return {
    messages,
    tokensFreed: 0,
    boundaryMessage: undefined,
  }
}

export function isSnipMarkerMessage(_message: unknown): boolean {
  return false
}
