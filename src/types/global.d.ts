declare const MACRO: {
  VERSION: string
  [key: string]: unknown
}

declare module 'react/compiler-runtime' {
  export function c(size: number): Array<unknown>
}

declare module 'qrcode' {
  export function toString(...args: any[]): Promise<string>
}

declare module 'proper-lockfile' {
  export type CheckOptions = Record<string, any>
  export type LockOptions = Record<string, any>
  export type UnlockOptions = Record<string, any>
}

declare module 'react-reconciler' {
  const createReconciler: any
  export type FiberRoot = any
  export default createReconciler
}

declare module 'react-reconciler/constants.js' {
  export const ConcurrentRoot: number
  export const LegacyRoot: number
  export const DefaultEventPriority: number
  export const ContinuousEventPriority: number
  export const DiscreteEventPriority: number
  export const IdleEventPriority: number
}

declare module 'asciichart' {
  export function plot(...args: any[]): string
}

declare module 'bidi-js' {
  const bidiFactory: any
  export default bidiFactory
}

declare module 'cacache' {
  const cacache: any
  export default cacache
}

declare module 'picomatch' {
  const picomatch: any
  export default picomatch
}

declare module 'stack-utils' {
  const StackUtils: any
  export default StackUtils
}

declare module 'turndown' {
  const TurndownService: any
  export default TurndownService
}

declare module '*.md' {
  const content: string
  export default content
}

declare module '*.txt' {
  const content: string
  export default content
}

declare module '*.prompt' {
  const content: string
  export default content
}
