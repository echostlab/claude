export type SyntaxTheme = Record<string, string>

export declare class ColorFile {
  constructor(path?: string, content?: string)
  path: string
  content: string
}

export declare class ColorDiff {
  diff(...args: unknown[]): unknown[]
}

export declare function getSyntaxTheme(name?: string): SyntaxTheme
