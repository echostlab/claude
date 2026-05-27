import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { WORKFLOW_TOOL_NAME } from './constants.js'

const inputSchema = z.object({
  workflow: z.string().optional(),
})

export const WorkflowTool = buildTool({
  isMcp: false,
  isOpenWorld() {
    return false
  },
  name: WORKFLOW_TOOL_NAME,
  maxResultSizeChars: 20_000,
  async description() {
    return 'Run a bundled workflow script'
  },
  async prompt() {
    return 'Use this tool to run a workflow only when bundled workflows are available.'
  },
  inputSchema,
  async call(input) {
    return `Workflow support is unavailable${input.workflow ? ` for ${input.workflow}` : ''} in this source snapshot.`
  },
  renderToolUseMessage(input) {
    return input.workflow ? `Workflow: ${input.workflow}` : 'Workflow'
  },
  renderToolResultMessage(output) {
    return output
  },
  mapToolResultToToolResultBlockParam(content, toolUseID) {
    return { type: 'tool_result', tool_use_id: toolUseID, content }
  },
} satisfies ToolDef<typeof inputSchema, string>)
