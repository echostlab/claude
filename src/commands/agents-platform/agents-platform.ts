import type { LocalCommandResult } from '../../commands.js'

export async function call(): Promise<LocalCommandResult> {
  return {
    type: 'text',
    value: 'Agents platform is unavailable in this source snapshot.',
  }
}
