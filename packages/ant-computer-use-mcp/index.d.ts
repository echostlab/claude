export type GrantFlags = {
  clipboardRead: boolean
  clipboardWrite: boolean
  systemKeyCombos: boolean
}

export type ScreenshotDims = {
  width: number
  height: number
  displayWidth?: number
  displayHeight?: number
  displayId?: number
  originX?: number
  originY?: number
}

export type CuPermissionRequest = Record<string, unknown>
export type CuPermissionResponse = Record<string, unknown>
export type CuCallToolResult = { content: unknown[]; isError?: boolean }
export type ComputerUseSessionContext = Record<string, unknown>
export type ComputerExecutor = Record<string, unknown>
export type DisplayGeometry = Record<string, unknown>
export type FrontmostApp = Record<string, unknown>
export type InstalledApp = Record<string, unknown>
export type ResolvePrepareCaptureResult = Record<string, unknown>
export type RunningApp = Record<string, unknown>
export type ScreenshotResult = Record<string, unknown>

export declare const DEFAULT_GRANT_FLAGS: GrantFlags
export declare const API_RESIZE_PARAMS: { maxWidth: number; maxHeight: number }
export declare function targetImageSize(width: number, height: number): { width: number; height: number }
export declare function buildComputerUseTools(...args: unknown[]): unknown[]
export declare function createComputerUseMcpServer(...args: unknown[]): {
  setRequestHandler(...args: unknown[]): void
  connect(...args: unknown[]): Promise<void>
}
export declare function bindSessionContext(
  ctx: ComputerUseSessionContext,
): {
  ctx: ComputerUseSessionContext
  dispatch(name: string, args: unknown): Promise<CuCallToolResult>
}
