export type FsReadRestrictionConfig = {
  allowOnly?: string[]
  denyWithinAllow?: string[]
}

export type FsWriteRestrictionConfig = FsReadRestrictionConfig

export type NetworkHostPattern = string

export type NetworkRestrictionConfig = {
  allowOnly?: NetworkHostPattern[]
}

export type IgnoreViolationsConfig = Record<string, unknown>

export type SandboxAskCallback = (...args: unknown[]) => Promise<unknown>

export type SandboxDependencyCheck = {
  satisfied: boolean
  missing: string[]
}

export type SandboxViolationEvent = Record<string, unknown>

export type SandboxRuntimeConfig = Record<string, unknown>

export declare class SandboxViolationStore {
  getViolations(): SandboxViolationEvent[]
  clear(): void
}

export declare class SandboxManager {
  static isSupportedPlatform(): boolean
  static isSandboxingEnabled(): boolean
  static isSandboxEnabledInSettings(): boolean
  static isSandboxRequired(): boolean
  static areUnsandboxedCommandsAllowed(): boolean
  static areSandboxSettingsLockedByPolicy(): boolean
  static isAutoAllowBashIfSandboxedEnabled(): boolean
  static getSandboxUnavailableReason(): string | undefined
  static getFsReadConfig(): FsReadRestrictionConfig
  static getFsWriteConfig(): FsWriteRestrictionConfig
  static getNetworkRestrictionConfig(): NetworkRestrictionConfig
  static getIgnoreViolations(): IgnoreViolationsConfig
  static getAllowUnixSockets(): boolean
  static getAllowLocalBinding(): boolean
  static getEnableWeakerNestedSandbox(): boolean
  static getProxyPort(): number | undefined
  static getSocksProxyPort(): number | undefined
  static getLinuxHttpSocketPath(): string | undefined
  static getLinuxSocksSocketPath(): string | undefined
  static waitForNetworkInitialization(): Promise<boolean>
  static getSandboxViolationStore(): SandboxViolationStore
  static annotateStderrWithSandboxFailures(stderr: string): string
  static cleanupAfterCommand(...args: unknown[]): void
  static checkDependencies(...args: unknown[]): SandboxDependencyCheck
  static initialize(...args: unknown[]): Promise<void>
  static updateConfig(...args: unknown[]): void
  static refreshConfig(...args: unknown[]): void
  static reset(...args: unknown[]): void
  static wrapWithSandbox<T>(command: T): T
  static setSandboxSettings(...args: unknown[]): void
}

export declare const SandboxRuntimeConfigSchema: {
  parse<T>(value: T): T
  safeParse<T>(value: T): { success: true; data: T }
}
