import type { Command } from '../../commands.js'

const agentsPlatform = {
  type: 'local',
  name: 'agents-platform',
  description: 'Inspect agents platform settings',
  supportsNonInteractive: true,
  async load() {
    return {
      async call() {
        return {
          type: 'text' as const,
          value: 'Agents platform is unavailable in this source build.',
        }
      },
    }
  },
} satisfies Command

export default agentsPlatform
