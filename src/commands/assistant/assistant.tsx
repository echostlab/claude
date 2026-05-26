import React, { useEffect } from 'react'
import { homedir } from 'os'
import { join } from 'path'
import { Box, Text } from '../../ink.js'
import type { LocalJSXCommandContext } from '../../commands.js'
import type { LocalJSXCommandOnDone } from '../../types/command.js'

type NewInstallWizardProps = {
  defaultDir: string
  onInstalled: (dir: string) => void
  onCancel: () => void
  onError: (message: string) => void
}

export async function computeDefaultInstallDir(): Promise<string> {
  return join(homedir(), '.claude-assistant')
}

export function NewInstallWizard({ defaultDir, onCancel }: NewInstallWizardProps): React.ReactNode {
  useEffect(() => {
    onCancel()
  }, [onCancel])

  return (
    <Box flexDirection="column">
      <Text>{`Assistant installer unavailable. Suggested path: ${defaultDir}`}</Text>
    </Box>
  )
}

export async function call(
  onDone: LocalJSXCommandOnDone,
  _context: LocalJSXCommandContext,
): Promise<React.ReactNode> {
  const defaultDir = await computeDefaultInstallDir()
  return (
    <NewInstallWizard
      defaultDir={defaultDir}
      onInstalled={dir => onDone(`Assistant installed in ${dir}`)}
      onCancel={() => onDone('Assistant install cancelled')}
      onError={message => onDone(message)}
    />
  )
}
