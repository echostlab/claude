export type KeybindingContextName = string

export type ParsedKeystroke = {
  key: string
  ctrl?: boolean
  alt?: boolean
  shift?: boolean
  meta?: boolean
  super?: boolean
}

export type ParsedBinding = {
  context: KeybindingContextName
  action: string
  chord: ParsedKeystroke[]
}

export type KeybindingBlock = {
  context: KeybindingContextName
  bindings: ParsedBinding[]
}
