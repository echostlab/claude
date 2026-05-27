const DEFAULT_MACRO = {
  VERSION: process.env.npm_package_version ?? '1.0.0',
  BUILD_TIME: '',
  PACKAGE_URL: 'claude-code',
  NATIVE_PACKAGE_URL: 'claude-code',
  FEEDBACK_CHANNEL: 'support',
  ISSUES_EXPLAINER: 'report the issue to the maintainer',
  VERSION_CHANGELOG: '',
}

if (typeof globalThis.MACRO === 'undefined') {
  globalThis.MACRO = DEFAULT_MACRO
}

await import('./cli.js')
