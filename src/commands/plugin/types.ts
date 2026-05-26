export type ViewState =
  | { type: 'help' }
  | { type: 'validate'; path: string }
  | { type: 'browse-marketplace'; targetMarketplace?: string; targetPlugin?: string }
  | { type: 'discover-plugins'; targetPlugin?: string }
  | {
      type: 'manage-plugins'
      targetPlugin?: string
      action?: 'uninstall' | 'enable' | 'disable'
    }
  | { type: 'marketplace-list' }
  | { type: 'add-marketplace'; initialValue?: string }
  | {
      type: 'manage-marketplaces'
      targetMarketplace?: string
      action?: 'remove' | 'update'
    }
  | { type: 'marketplace-menu' }
  | { type: string; [key: string]: any }

export type PluginSettingsProps = {
  onComplete: (result?: string, options?: { display?: string }) => void
  args: string
  showMcpRedirectMessage?: boolean
  [key: string]: unknown
}
