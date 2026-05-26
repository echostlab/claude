import { useEffect } from 'react'
import type { AssistantSession } from './sessionDiscovery.js'

type AssistantSessionChooserProps = {
  sessions: AssistantSession[]
  onSelect: (id: string) => void
  onCancel: () => void
}

export function AssistantSessionChooser({ onCancel }: AssistantSessionChooserProps) {
  useEffect(() => {
    onCancel()
  }, [onCancel])

  return null
}
