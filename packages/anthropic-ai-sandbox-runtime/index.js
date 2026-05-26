const violationStore = new (class SandboxViolationStore {
  constructor() {
    this.violations = []
  }

  getViolations() {
    return [...this.violations]
  }

  clear() {
    this.violations = []
  }
})()

export class SandboxManager {
  static isSupportedPlatform() {
    return false
  }

  static isSandboxingEnabled() {
    return false
  }

  static isSandboxEnabledInSettings() {
    return false
  }

  static isSandboxRequired() {
    return false
  }

  static areUnsandboxedCommandsAllowed() {
    return true
  }

  static areSandboxSettingsLockedByPolicy() {
    return false
  }

  static isAutoAllowBashIfSandboxedEnabled() {
    return false
  }

  static getSandboxUnavailableReason() {
    return 'Sandbox runtime is unavailable in this source build.'
  }

  static getFsReadConfig() {
    return { allowOnly: [], denyWithinAllow: [] }
  }

  static getFsWriteConfig() {
    return { allowOnly: [], denyWithinAllow: [] }
  }

  static getNetworkRestrictionConfig() {
    return { allowOnly: [] }
  }

  static getIgnoreViolations() {
    return {}
  }

  static getAllowUnixSockets() {
    return false
  }

  static getAllowLocalBinding() {
    return false
  }

  static getEnableWeakerNestedSandbox() {
    return false
  }

  static getProxyPort() {
    return undefined
  }

  static getSocksProxyPort() {
    return undefined
  }

  static getLinuxHttpSocketPath() {
    return undefined
  }

  static getLinuxSocksSocketPath() {
    return undefined
  }

  static async waitForNetworkInitialization() {
    return false
  }

  static getSandboxViolationStore() {
    return violationStore
  }

  static annotateStderrWithSandboxFailures(stderr) {
    return stderr
  }

  static cleanupAfterCommand() {}

  static checkDependencies() {
    return { satisfied: true, missing: [] }
  }

  static async initialize() {}

  static updateConfig() {}

  static refreshConfig() {}

  static reset() {}

  static wrapWithSandbox(command) {
    return command
  }

  static setSandboxSettings() {}
}

export class SandboxViolationStore {
  getViolations() {
    return violationStore.getViolations()
  }

  clear() {
    violationStore.clear()
  }
}

export const SandboxRuntimeConfigSchema = {
  parse(value) {
    return value
  },
  safeParse(value) {
    return { success: true, data: value }
  },
}
