import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'

const inputSchema = z.object({
  prompt: z.string().optional(),
})

export const SuggestBackgroundPRTool = buildTool({
  isMcp: false,
  isOpenWorld() {
    return false
  },
  name: 'SuggestBackgroundPR',
  maxResultSizeChars: 20_000,
  async description() {
    return 'Suggest creating a background PR workflow'
  },
  async prompt() {
    return 'Use this tool to suggest a background PR only when supported.'
  },
  inputSchema,
  async call() {
    return 'Background PR suggestions are unavailable in this source snapshot.'
  },
  renderToolUseMessage() {
    return 'Suggesting background PR'
  },
  renderToolResultMessage(output) {
    return output
  },
  mapToolResultToToolResultBlockParam(content, toolUseID) {
    return { type: 'tool_result', tool_use_id: toolUseID, content }
  },
} satisfies ToolDef<typeof inputSchema, string>)
