import { z } from 'zod/v4'
import { buildTool } from '../../Tool.js'
import { REPL_TOOL_NAME } from './constants.js'

const inputSchema = z.object({}).passthrough()

const MESSAGE = 'REPL mode is unavailable in this source build.'

export const REPLTool = buildTool({
  name: REPL_TOOL_NAME,
  maxResultSizeChars: 4_000,
  async description() {
    return 'Run batched operations through the interactive REPL surface.'
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
