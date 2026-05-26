import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { REPL_TOOL_NAME } from './constants.js'

const inputSchema = z.object({
  prompt: z.string().optional(),
})

export const REPLTool = buildTool({
  isMcp: false,
  isOpenWorld() {
    return false
  },
  name: REPL_TOOL_NAME,
  maxResultSizeChars: 20_000,
  async description() {
    return 'Execute a REPL-only helper action'
  },
  async prompt() {
    return 'Use this tool only in REPL-specific flows.'
  },
  inputSchema,
  async call() {
    return 'REPL tool is unavailable in this source snapshot.'
  },
  renderToolUseMessage(input) {
    return input.prompt ? `REPL: ${input.prompt}` : 'REPL'
  },
  renderToolResultMessage(output) {
    return output
  },
  mapToolResultToToolResultBlockParam(content, toolUseID) {
    return { type: 'tool_result', tool_use_id: toolUseID, content }
  },
} satisfies ToolDef<typeof inputSchema, string>)
