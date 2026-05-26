export type SecureStorageData = {
  [key: string]: string | undefined
}

export type SecureStorage = {
  get(key: string): string | undefined | Promise<string | undefined>
  set(key: string, value: string): void | Promise<void>
  delete(key: string): void | Promise<void>
}
