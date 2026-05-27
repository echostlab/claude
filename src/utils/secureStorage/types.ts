export type SecureStorageData = {
  authToken?: string
  mcpOAuth?: Record<string, any>
  mcpOAuthClientConfig?: Record<string, any>
  pluginSecrets?: Record<string, Record<string, any> | undefined>
  trustedDeviceToken?: string
  [key: string]: any
}

export type SecureStorage = {
  name: string
  read(): SecureStorageData | null
  readAsync(): Promise<SecureStorageData | null>
  update(data: SecureStorageData): { success: boolean; warning?: string }
  delete(): boolean
  get?(key: string): string | undefined | Promise<string | undefined>
  set?(key: string, value: string): void | Promise<void>
}
