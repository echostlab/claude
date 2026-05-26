export type KeybindingContextName = string

export type ParsedKeystroke = {
  key: string
  ctrl?: boolean
  alt?: boolean
  shift?: boolean
  meta?: boolean
  [key: string]: unknown
}

export type Chord = ParsedKeystroke[]

export type ParsedBinding = {
  command: string
  keystrokes: Chord
  contexts?: KeybindingContextName[]
  args?: string[]
  [key: string]: any
}

export type KeybindingBlock = {
  contexts?: KeybindingContextName[]
  bindings: ParsedBinding[]
  [key: string]: any
}
