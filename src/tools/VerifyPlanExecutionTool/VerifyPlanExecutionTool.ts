import { z } from 'zod/v4'
import { buildTool } from '../../Tool.js'
import { VERIFY_PLAN_EXECUTION_TOOL_NAME } from './constants.js'

const inputSchema = z.object({}).passthrough()

const MESSAGE = 'Plan execution verification is unavailable in this source build.'

export const VerifyPlanExecutionTool = buildTool({
  name: VERIFY_PLAN_EXECUTION_TOOL_NAME,
  maxResultSizeChars: 4_000,
  async description() {
    return 'Verify whether a plan was executed as expected.'
  },
  async prompt() {
    return MESSAGE
  },
  get inputSchema() {
    return inputSchema
  },
  renderToolUseMessage() {
    return null
  },
  async call() {
    return { data: { message: MESSAGE } }
  },
  mapToolResultToToolResultBlockParam(_output, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: MESSAGE,
    }
  },
})
