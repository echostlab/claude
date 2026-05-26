import type {
  ContextCollapseCommitEntry,
  ContextCollapseSnapshotEntry,
} from '../../types/logs.js'

type ContextCollapseState = {
  commits: ContextCollapseCommitEntry[]
  snapshot?: ContextCollapseSnapshotEntry
}

type ContextCollapseStats = {
  collapsedSpans: number
  stagedSpans: number
  collapsedMessages: number
  health: {
    totalErrors: number
    totalEmptySpawns: number
    totalSpawns: number
    emptySpawnWarningEmitted: boolean
    lastError?: string
  }
}

const state: ContextCollapseState = {
  commits: [],
}

const listeners = new Set<() => void>()

const stats: ContextCollapseStats = {
  collapsedSpans: 0,
  stagedSpans: 0,
  collapsedMessages: 0,
  health: {
    totalErrors: 0,
    totalEmptySpawns: 0,
    totalSpawns: 0,
    emptySpawnWarningEmitted: false,
  },
}

function notify(): void {
  for (const listener of listeners) {
    listener()
  }
}

export function initContextCollapse(): void {}

export function isContextCollapseEnabled(): boolean {
  return false
}

export function collapseContext(): null {
  return null
}

export function getContextCollapse(): ContextCollapseState {
  return state
}

export function setContextCollapseEntries(
  commits: ContextCollapseCommitEntry[],
  snapshot?: ContextCollapseSnapshotEntry,
): void {
  state.commits = [...commits]
  state.snapshot = snapshot
  stats.stagedSpans = commits.length
  notify()
}

export function resetContextCollapse(): void {
  state.commits = []
  state.snapshot = undefined
  stats.collapsedSpans = 0
  stats.stagedSpans = 0
  stats.collapsedMessages = 0
  stats.health.totalErrors = 0
  stats.health.totalEmptySpawns = 0
  stats.health.totalSpawns = 0
  stats.health.emptySpawnWarningEmitted = false
  stats.health.lastError = undefined
  notify()
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
