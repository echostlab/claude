type ContextCollapseHealth = {
  totalSpawns: number
  totalErrors: number
  lastError: string | null
  emptySpawnWarningEmitted: boolean
  totalEmptySpawns: number
}

type ContextCollapseStats = {
  collapsedSpans: number
  collapsedMessages: number
  stagedSpans: number
  health: ContextCollapseHealth
}

const DEFAULT_STATS: ContextCollapseStats = {
  collapsedSpans: 0,
  collapsedMessages: 0,
  stagedSpans: 0,
  health: {
    totalSpawns: 0,
    totalErrors: 0,
    lastError: null,
    emptySpawnWarningEmitted: false,
    totalEmptySpawns: 0,
  },
}

let stats: ContextCollapseStats = structuredClone(DEFAULT_STATS)
const listeners = new Set<() => void>()

function emit(): void {
  for (const listener of listeners) {
    listener()
  }
}

export function initContextCollapse(): void {}

export async function applyCollapsesIfNeeded<T>(
  messages: T[],
  _toolUseContext?: unknown,
  _querySource?: unknown,
): Promise<{ messages: T[] }> {
  return { messages }
}

export function recoverFromOverflow<T>(
  messages: T[],
  _querySource?: unknown,
): { messages: T[]; committed: number } {
  return { messages, committed: 0 }
}

export function isContextCollapseEnabled(): boolean {
  return false
}

export function isWithheldPromptTooLong(
  _message: unknown,
  _predicate?: unknown,
  _querySource?: unknown,
): boolean {
  return false
}

export function resetContextCollapse(): void {
  stats = structuredClone(DEFAULT_STATS)
  emit()
}

export function getStats(): ContextCollapseStats {
  return stats
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
