import { z } from 'zod/v4'
import { buildTool } from '../../Tool.js'

const inputSchema = z.object({}).passthrough()

const MESSAGE = 'Tungsten is unavailable in this source build.'

export const TungstenTool = buildTool({
  name: 'Tungsten',
  maxResultSizeChars: 4_000,
  async description() {
    return 'Access the Tungsten internal workflow surface.'
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
