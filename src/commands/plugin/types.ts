export type PluginSettingsProps = {
  onDone?: (message?: string) => void
}

export type ViewState =
  | {
      type: 'manage-marketplaces'
      targetMarketplace?: string
      action?: string
    }
  | {
      type: 'manage-plugins'
      targetPlugin?: string
      action?: string
    }
  | {
      type: string
      [key: string]: unknown
    }
