export type Workflow = 'claude' | 'claude-review'

export type Warning = {
  title: string
  body?: string
}

export type State = {
  step: string
  selectedRepoName?: string
  currentRepo?: string
  useCurrentRepo?: boolean
  apiKeyOrOAuthToken?: string
  useExistingKey?: boolean
  currentWorkflowInstallStep?: string
  warnings: Warning[]
  secretExists?: boolean
  secretName?: string
  useExistingSecret?: boolean
  workflowExists?: boolean
  selectedWorkflows: Workflow[]
  selectedApiKeyOption?: string
  authType?: string
  workflowAction?: string
  error?: string
  errorReason?: string
  errorInstructions?: string[]
}
