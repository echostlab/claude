import type {
  ContextCollapseCommitEntry,
  ContextCollapseSnapshotEntry,
} from '../../types/logs.js'
import { setContextCollapseEntries } from './index.js'

export function restoreFromEntries(
  commits: ContextCollapseCommitEntry[],
  snapshot?: ContextCollapseSnapshotEntry,
): void {
  setContextCollapseEntries(commits, snapshot)
}
