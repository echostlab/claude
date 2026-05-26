export type ComputerUseInputAPI = {
  isSupported: true
  moveMouse(...args: unknown[]): Promise<void>
  click(...args: unknown[]): Promise<void>
  key(...args: unknown[]): Promise<void>
  keys(...args: unknown[]): Promise<void>
  scroll(...args: unknown[]): Promise<void>
  drag(...args: unknown[]): Promise<void>
}

export type ComputerUseInput =
  | ComputerUseInputAPI
  | {
      isSupported: false
      moveMouse(...args: unknown[]): Promise<void>
      click(...args: unknown[]): Promise<void>
      key(...args: unknown[]): Promise<void>
      keys(...args: unknown[]): Promise<void>
      scroll(...args: unknown[]): Promise<void>
      drag(...args: unknown[]): Promise<void>
    }

export declare const isSupported: false
export declare const moveMouse: (...args: unknown[]) => Promise<void>
export declare const click: (...args: unknown[]) => Promise<void>
export declare const key: (...args: unknown[]) => Promise<void>
export declare const keys: (...args: unknown[]) => Promise<void>
export declare const scroll: (...args: unknown[]) => Promise<void>
export declare const drag: (...args: unknown[]) => Promise<void>
