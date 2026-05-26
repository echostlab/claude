import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'

const inputSchema = z.object({
  command: z.string().optional(),
})

export const TUNGSTEN_TOOL_NAME = 'Tungsten'

export function clearSessionsWithTungstenUsage(): void {}

export function resetInitializationState(): void {}

export const TungstenTool = buildTool({
  isMcp: false,
  isOpenWorld() {
    return false
  },
  name: TUNGSTEN_TOOL_NAME,
  maxResultSizeChars: 20_000,
  async description() {
    return 'Manage Tungsten-backed terminal work'
  },
  async prompt() {
    return 'Use this tool only when Tungsten functionality is available.'
  },
  inputSchema,
  async call(input) {
    return `Tungsten is unavailable in this source snapshot${input.command ? ` (${input.command})` : ''}.`
  },
  renderToolUseMessage(input) {
    return input.command ? `Tungsten: ${input.command}` : 'Tungsten'
  },
  renderToolResultMessage(output) {
    return output
  },
  mapToolResultToToolResultBlockParam(content, toolUseID) {
    return {
      type: 'tool_result',
      tool_use_id: toolUseID,
      content,
    }
  },
} satisfies ToolDef<typeof inputSchema, string>)
