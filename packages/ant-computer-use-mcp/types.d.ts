export type CoordinateMode = 'screen' | 'window' | 'auto'
export type CuSubGates = Record<string, boolean>
export type CuPermissionRequest = Record<string, unknown>
export type CuPermissionResponse = Record<string, unknown>
export type ComputerUseHostAdapter = Record<string, unknown>
export type Logger = {
  debug?: (...args: unknown[]) => void
  info?: (...args: unknown[]) => void
  warn?: (...args: unknown[]) => void
  error?: (...args: unknown[]) => void
}

export declare const DEFAULT_GRANT_FLAGS: {
  clipboardRead: boolean
  clipboardWrite: boolean
  systemKeyCombos: boolean
}
