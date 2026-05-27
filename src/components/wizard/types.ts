import type React from 'react'

export type WizardStepComponent<T> = React.ComponentType<{
  data: T
}>

export type WizardContextValue<T> = {
  currentStepIndex: number
  wizardData: T
  steps: WizardStepComponent<T>[]
  title?: string
  showStepCounter: boolean
  goNext: () => void
  goBack: () => void
  goToStep: (index: number) => void
  cancel: () => void
  updateData: (updates: Partial<T>) => void
}

export type WizardProviderProps<T> = {
  steps: WizardStepComponent<T>[]
  initialData?: T
  onComplete: (data: T) => void
  onCancel?: () => void
  children?: React.ReactNode
  title?: string
  showStepCounter?: boolean
}
