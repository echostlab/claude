export type CachedMCConfig = {
  supportedModels: string[]
}

const defaultConfig: CachedMCConfig = {
  supportedModels: [],
}

export function getCachedMCConfig(): CachedMCConfig {
  return defaultConfig
}
