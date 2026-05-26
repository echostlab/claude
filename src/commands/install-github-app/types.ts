export type Workflow = {
  name: string
  path?: string
  [key: string]: unknown
}

export type Warning = {
  message: string
  [key: string]: unknown
}

export type State = {
  step: string
  workflows?: Workflow[]
  warnings?: Warning[]
  [key: string]: unknown
}
