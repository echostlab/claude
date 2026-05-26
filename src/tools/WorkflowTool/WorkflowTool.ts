import { z } from 'zod/v4'
import { buildTool } from '../../Tool.js'
import { WORKFLOW_TOOL_NAME } from './constants.js'

const inputSchema = z.object({}).passthrough()

const MESSAGE = 'Workflow scripts are unavailable in this source build.'

export const WorkflowTool = buildTool({
  name: WORKFLOW_TOOL_NAME,
  maxResultSizeChars: 4_000,
  async description() {
    return 'Run a bundled workflow script.'
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
