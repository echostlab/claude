import type { Command } from '../../commands.js'

const agentsPlatform = {
  type: 'local',
  name: 'agents-platform',
  description: 'Manage the agents platform',
  supportsNonInteractive: true,
  load: () => import('./agents-platform.js'),
} satisfies Command

export default agentsPlatform
