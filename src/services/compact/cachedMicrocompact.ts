export type CacheEditsBlock = { type: string; content: any }
export type PinnedCacheEdits = { type: string; content: any }
export type CachedMCState = {
  cacheEdits: CacheEditsBlock[]
  pinnedCacheEdits: PinnedCacheEdits[]
  pinnedEdits: Array<{ userMessageIndex: number; block: CacheEditsBlock }>
}

export type CachedMCConfig = {
  supportedModels: string[]
}

export const createCachedMCState = (): CachedMCState => ({
  cacheEdits: [],
  pinnedCacheEdits: [],
  pinnedEdits: [],
})

export const getCachedMCConfig = (): CachedMCConfig => ({
  supportedModels: [],
})

export const isCachedMicrocompactEnabled = () => false
export const isModelSupportedForCacheEditing = (_model: string) => false
export const markToolsSentToAPI = (_state: CachedMCState) => {}
export const resetCachedMCState = (state: CachedMCState) => {
  state.cacheEdits = []
  state.pinnedCacheEdits = []
  state.pinnedEdits = []
}

export const cachedMicrocompact = async (..._args: any[]) => null
