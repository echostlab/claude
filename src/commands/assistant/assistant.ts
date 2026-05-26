import { homedir } from 'os'
import { join } from 'path'
import { useEffect } from 'react'
import type {
  LocalJSXCommandContext,
  LocalJSXCommandOnDone,
} from '../../commands.js'
import type { ToolUseContext } from '../../Tool.js'

type InstallWizardProps = {
  defaultDir: string
  onInstalled: (dir: string) => void
  onCancel: () => void
  onError: (message: string) => void
}

export async function computeDefaultInstallDir(): Promise<string> {
  return join(homedir(), '.claude-assistant')
}

export function NewInstallWizard({ onCancel }: InstallWizardProps) {
  useEffect(() => {
    onCancel()
  }, [onCancel])

  return null
}

export async function call(
  onDone: LocalJSXCommandOnDone,
  _context: ToolUseContext & LocalJSXCommandContext,
  _args: string,
): Promise<null> {
  onDone('Assistant mode is unavailable in this source build.', {
    display: 'system',
  })
  return null
}
