export type TurnStartTime = number

export type PersistedFile = {
  filename: string
  url?: string
  sizeBytes?: number
  [key: string]: unknown
}

export type FailedPersistence = {
  filename: string
  error: string
}

export type FilesPersistedEventData = {
  files: PersistedFile[]
  failed: FailedPersistence[]
}

export const DEFAULT_UPLOAD_CONCURRENCY = 4
export const FILE_COUNT_LIMIT = 32
export const OUTPUTS_SUBDIR = 'outputs'
