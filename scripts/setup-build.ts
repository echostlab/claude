import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))

type StubFile = {
  path: string
  content: string
}

const stubs: StubFile[] = [
  {
    path: 'node_modules/@anthropic-ai/sandbox-runtime/index.js',
    content: `class SandboxViolationStore {
  getViolations() { return []; }
  clear() {}
}

class SandboxManager {
  static isSupportedPlatform() { return false; }
  static isSandboxingEnabled() { return false; }
  static isAutoAllowBashIfSandboxedEnabled() { return false; }
  static getFsWriteConfig() { return { allowOnly: [], denyWithinAllow: [] }; }
  static getFsReadConfig() { return { allowOnly: [], denyWithinAllow: [] }; }
  static getNetworkRestrictionConfig() { return { allowOnly: [] }; }
  static getIgnoreViolations() { return {}; }
  static getProxyPort() { return undefined; }
  static getSocksProxyPort() { return undefined; }
  static getLinuxHttpSocketPath() { return undefined; }
  static getLinuxSocksSocketPath() { return undefined; }
  static getAllowUnixSockets() { return false; }
  static getAllowLocalBinding() { return false; }
  static getEnableWeakerNestedSandbox() { return false; }
  static getLinuxGlobPatternWarnings() { return []; }
  static getExcludedCommands() { return []; }
  static async waitForNetworkInitialization() { return false; }
  static async initialize() {}
  static updateConfig() {}
  static setSandboxSettings() {}
  static wrapWithSandbox(cmd) { return cmd; }
  static refreshConfig() {}
  static reset() {}
  static checkDependencies() { return { satisfied: true, missing: [] }; }
  static getSandboxViolationStore() { return new SandboxViolationStore(); }
  static annotateStderrWithSandboxFailures() {}
  static cleanupAfterCommand() {}
}

const SandboxRuntimeConfigSchema = {
  parse: value => value,
  safeParse: value => ({ success: true, data: value }),
};

module.exports = {
  SandboxManager,
  SandboxViolationStore,
  SandboxRuntimeConfigSchema,
};
`,
  },
  {
    path: 'node_modules/@anthropic-ai/sandbox-runtime/package.json',
    content:
      '{"name":"@anthropic-ai/sandbox-runtime","version":"0.0.0","main":"index.js"}\n',
  },
  {
    path: 'node_modules/@ant/claude-for-chrome-mcp/index.js',
    content: `const BROWSER_TOOLS = [
  { name: 'tabs_context_mcp' },
  { name: 'tabs_create_mcp' },
  { name: 'navigate' },
  { name: 'read_page' },
  { name: 'get_page_text' },
  { name: 'find' },
  { name: 'computer' },
  { name: 'form_input' },
  { name: 'javascript_tool' },
  { name: 'read_console_messages' },
  { name: 'read_network_requests' },
  { name: 'gif_creator' },
  { name: 'resize_window' },
  { name: 'upload_image' },
  { name: 'update_plan' },
  { name: 'shortcuts_list' },
  { name: 'shortcuts_execute' },
  { name: 'switch_browser' },
];

function createClaudeForChromeMcpServer() {
  return null;
}

module.exports = { BROWSER_TOOLS, createClaudeForChromeMcpServer };
`,
  },
  {
    path: 'node_modules/@ant/claude-for-chrome-mcp/package.json',
    content:
      '{"name":"@ant/claude-for-chrome-mcp","version":"0.0.0","main":"index.js"}\n',
  },
  {
    path: 'node_modules/@anthropic-ai/foundry-sdk/index.js',
    content: 'module.exports = { FoundryClient: class {} };\n',
  },
  {
    path: 'node_modules/@anthropic-ai/foundry-sdk/package.json',
    content:
      '{"name":"@anthropic-ai/foundry-sdk","version":"0.0.0","main":"index.js"}\n',
  },
  {
    path: 'node_modules/@anthropic-ai/mcpb/index.js',
    content: `const McpbManifestSchema = {
  parse: value => value,
  safeParse: value => ({ success: true, data: value }),
};

module.exports = { McpbManifestSchema };
`,
  },
  {
    path: 'node_modules/@anthropic-ai/mcpb/package.json',
    content:
      '{"name":"@anthropic-ai/mcpb","version":"0.0.0","main":"index.js"}\n',
  },
  {
    path: 'node_modules/color-diff-napi/index.js',
    content: `class ColorDiff {
  constructor(patch, firstLine, filePath, fileContent) {
    this.patch = patch;
    this.firstLine = firstLine;
    this.filePath = filePath;
    this.fileContent = fileContent;
  }

  render() {
    return null;
  }
}

class ColorFile {
  constructor(code, filePath) {
    this.code = code;
    this.filePath = filePath;
  }

  render() {
    return null;
  }
}

function getSyntaxTheme() {
  return {};
}

module.exports = { ColorDiff, ColorFile, getSyntaxTheme };
`,
  },
  {
    path: 'node_modules/color-diff-napi/index.mjs',
    content: `export class ColorDiff {
  constructor(patch, firstLine, filePath, fileContent) {
    this.patch = patch;
    this.firstLine = firstLine;
    this.filePath = filePath;
    this.fileContent = fileContent;
  }

  render() {
    return null;
  }
}

export class ColorFile {
  constructor(code, filePath) {
    this.code = code;
    this.filePath = filePath;
  }

  render() {
    return null;
  }
}

export function getSyntaxTheme() {
  return {};
}
`,
  },
  {
    path: 'node_modules/color-diff-napi/package.json',
    content:
      '{"name":"color-diff-napi","version":"0.0.0","main":"index.js","module":"index.mjs","exports":{".":{"import":"./index.mjs","require":"./index.js"}}}\n',
  },
  {
    path: 'node_modules/modifiers-napi/index.js',
    content: `function prewarm() {}

function isModifierPressed() {
  return false;
}

module.exports = { prewarm, isModifierPressed };
`,
  },
  {
    path: 'node_modules/modifiers-napi/package.json',
    content:
      '{"name":"modifiers-napi","version":"0.0.0","main":"index.js"}\n',
  },
  {
    path: 'node_modules/audio-capture-napi/index.js',
    content: `let nativeRecordingActive = false;

function isNativeAudioAvailable() {
  return false;
}

function isNativeRecordingActive() {
  return nativeRecordingActive;
}

function startNativeRecording() {
  nativeRecordingActive = false;
  return false;
}

function stopNativeRecording() {
  nativeRecordingActive = false;
}

module.exports = {
  isNativeAudioAvailable,
  isNativeRecordingActive,
  startNativeRecording,
  stopNativeRecording,
};
`,
  },
  {
    path: 'node_modules/audio-capture-napi/package.json',
    content:
      '{"name":"audio-capture-napi","version":"0.0.0","main":"index.js"}\n',
  },
  {
    path: 'node_modules/image-processor-napi/index.js',
    content: `const sharp = require('sharp');

function getNativeModule() {
  return {
    hasClipboardImage() {
      return false;
    },
    readClipboardImage() {
      return null;
    },
  };
}

module.exports = { default: sharp, sharp, getNativeModule };
`,
  },
  {
    path: 'node_modules/image-processor-napi/package.json',
    content:
      '{"name":"image-processor-napi","version":"0.0.0","main":"index.js"}\n',
  },
  {
    path: 'node_modules/url-handler-napi/index.js',
    content: `function waitForUrlEvent() {
  return null;
}

module.exports = { waitForUrlEvent };
`,
  },
  {
    path: 'node_modules/url-handler-napi/package.json',
    content:
      '{"name":"url-handler-napi","version":"0.0.0","main":"index.js"}\n',
  },
]

async function ensureFile(path: string, content: string): Promise<void> {
  const fullPath = join(rootDir, path)
  await mkdir(dirname(fullPath), { recursive: true })

  let existing: string | null = null
  try {
    existing = await readFile(fullPath, 'utf8')
  } catch {
    existing = null
  }

  if (existing !== content) {
    await writeFile(fullPath, content)
  }
}

await Promise.all(stubs.map(stub => ensureFile(stub.path, stub.content)))
