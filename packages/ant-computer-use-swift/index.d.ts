export type ComputerUseAPI = {
  tcc: {
    checkAccessibility(): Promise<boolean>
    checkScreenRecording(): Promise<boolean>
  }
  apps: {
    listInstalled(): Promise<unknown[]>
  }
  captureRegion(...args: unknown[]): Promise<unknown>
  captureExcluding(...args: unknown[]): Promise<unknown>
  resolvePrepareCapture(...args: unknown[]): Promise<unknown>
}

export declare const tcc: ComputerUseAPI['tcc']
export declare const apps: ComputerUseAPI['apps']
export declare function captureRegion(...args: unknown[]): Promise<unknown>
export declare function captureExcluding(...args: unknown[]): Promise<unknown>
export declare function resolvePrepareCapture(...args: unknown[]): Promise<unknown>
