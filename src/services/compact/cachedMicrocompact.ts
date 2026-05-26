export type CacheEditsBlock = {
  type: 'cache_edits'
  edits: {
    type: 'delete'
    cache_reference: string
  }[]
}

export type PinnedCacheEdits = {
  userMessageIndex: number
  block: CacheEditsBlock
}

export type CachedMCState = {
  pinnedEdits: PinnedCacheEdits[]
  registeredTools: Set<string>
  toolOrder: string[]
  deletedRefs: Set<string>
}

export function getCachedMCConfig(): {
  enabled: boolean
  triggerThreshold: number
  keepRecent: number
  systemPromptSuggestSummaries: boolean
  supportedModels: string[]
} {
  return {
    enabled: false,
    triggerThreshold: 10,
    keepRecent: 2,
    systemPromptSuggestSummaries: false,
    supportedModels: [],
  }
}

export function isCachedMicrocompactEnabled(): boolean {
  return getCachedMCConfig().enabled
}

export function isModelSupportedForCacheEditing(model: string): boolean {
  return getCachedMCConfig().supportedModels.some(pattern =>
    model.includes(pattern),
  )
}

export function createCachedMCState(): CachedMCState {
  return {
    pinnedEdits: [],
    registeredTools: new Set(),
    toolOrder: [],
    deletedRefs: new Set(),
  }
}

export function markToolsSentToAPI(_state: CachedMCState): void {}

export function resetCachedMCState(state: CachedMCState): void {
  state.pinnedEdits = []
  state.registeredTools.clear()
  state.toolOrder = []
  state.deletedRefs.clear()
}

export function createCacheEditsBlock(
  state: CachedMCState,
  toolsToDelete: string[],
): CacheEditsBlock | null {
  if (toolsToDelete.length === 0) {
    return null
  }

  for (const toolId of toolsToDelete) {
    state.deletedRefs.add(toolId)
  }

  return {
    type: 'cache_edits',
    edits: toolsToDelete.map(toolId => ({
      type: 'delete',
      cache_reference: toolId,
    })),
  }
}

export function registerToolResult(
  state: CachedMCState,
  toolUseId: string,
): void {
  if (state.registeredTools.has(toolUseId)) {
    return
  }

  state.registeredTools.add(toolUseId)
  state.toolOrder.push(toolUseId)
}

export function registerToolMessage(
  _state: CachedMCState,
  _groupIds: string[],
): void {}

export function getToolResultsToDelete(state: CachedMCState): string[] {
  const config = getCachedMCConfig()
  const activeToolIds = state.toolOrder.filter(id => !state.deletedRefs.has(id))

  if (activeToolIds.length <= config.triggerThreshold) {
    return []
  }

  return activeToolIds.slice(0, activeToolIds.length - config.keepRecent)
}
