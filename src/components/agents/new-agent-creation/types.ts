export type AgentWizardData = {
  name?: string
  description?: string
  prompt?: string
  tools?: string[]
  model?: string
  color?: string
  method?: string
  location?: string
  memory?: string
  [key: string]: unknown
}
