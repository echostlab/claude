export function isSnipBoundaryMessage(message: unknown): boolean {
  return (message as { subtype?: string } | null)?.subtype === 'snip_boundary'
}

export function projectSnippedView<T>(messages: T[]): T[] {
  return messages
}
