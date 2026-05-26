export type AgentWizardData = {
  name?: string
  description?: string
  prompt?: string
  model?: string
  tools?: string[]
  [key: string]: unknown
}
