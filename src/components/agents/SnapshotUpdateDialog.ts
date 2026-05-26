import { useEffect } from 'react'
import type { AgentMemoryScope } from '../../tools/AgentTool/agentMemory.js'

type SnapshotUpdateDialogProps = {
  agentType: string
  scope: AgentMemoryScope
  snapshotTimestamp: string
  onComplete: (choice: 'merge' | 'keep' | 'replace') => void
  onCancel: () => void
}

export function buildMergePrompt(
  agentType: string,
  scope: AgentMemoryScope,
): string {
  return `Merge the pending memory snapshot for agent ${agentType} (${String(scope)}).`
}

export function SnapshotUpdateDialog({ onCancel }: SnapshotUpdateDialogProps) {
  useEffect(() => {
    onCancel()
  }, [onCancel])

  return null
}
