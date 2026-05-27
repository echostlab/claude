export function parseConnectUrl(value: string): {
  serverUrl: string
  authToken: string | undefined
} {
  return {
    serverUrl: value,
    authToken: undefined,
  }
}
