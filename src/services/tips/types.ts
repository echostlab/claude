export type TipContext = Record<string, unknown>

export type Tip = {
  id: string
  content: string
  cooldownSessions?: number
  isRelevant?: (context: TipContext) => boolean
}
