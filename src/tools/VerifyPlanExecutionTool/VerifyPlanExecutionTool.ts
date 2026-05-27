import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { VERIFY_PLAN_EXECUTION_TOOL_NAME } from './constants.js'

const inputSchema = z.object({
  plan: z.string().optional(),
})

export const VerifyPlanExecutionTool = buildTool({
  isMcp: false,
  isOpenWorld() {
    return false
  },
  name: VERIFY_PLAN_EXECUTION_TOOL_NAME,
  maxResultSizeChars: 20_000,
  async description() {
    return 'Verify plan execution state'
  },
  async prompt() {
    return 'Use this tool to verify plan execution when available.'
  },
  inputSchema,
  async call() {
    return 'Plan execution verification is unavailable in this source snapshot.'
  },
  renderToolUseMessage() {
    return 'Verifying plan execution'
  },
  renderToolResultMessage(output) {
    return output
  },
  mapToolResultToToolResultBlockParam(content, toolUseID) {
    return { type: 'tool_result', tool_use_id: toolUseID, content }
  },
} satisfies ToolDef<typeof inputSchema, string>)
