export type CacheEditsBlock = {
  type: 'cache_edits'
  deletedToolIds?: string[]
  [key: string]: unknown
}

export type PinnedCacheEdits = {
  userMessageIndex: number
  block: CacheEditsBlock
}

export type CachedMCState = {
  pinnedEdits: PinnedCacheEdits[]
  toolsSentToAPI: boolean
}

export function createCachedMCState(): CachedMCState {
  return {
    pinnedEdits: [],
    toolsSentToAPI: false,
  }
}

export function markToolsSentToAPI(state: CachedMCState): void {
  state.toolsSentToAPI = true
}

export function resetCachedMCState(state: CachedMCState): void {
  state.pinnedEdits.length = 0
  state.toolsSentToAPI = false
}

export function isCachedMicrocompactEnabled(): boolean {
  return false
}

export function isModelSupportedForCacheEditing(_model: string): boolean {
  return false
}

export function getCachedMCConfig(): { enabled: boolean; supportedModels: string[] } {
  return {
    enabled: false,
    supportedModels: [],
  }
}
