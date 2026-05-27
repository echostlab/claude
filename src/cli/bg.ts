function unsupported(): never {
  throw new Error('Background session commands are unavailable in this leaked build')
}

export async function psHandler(_args?: unknown): Promise<void> {
  unsupported()
}

export async function logsHandler(_sessionId?: unknown): Promise<void> {
  unsupported()
}

export async function attachHandler(_sessionId?: unknown): Promise<void> {
  unsupported()
}

export async function killHandler(_sessionId?: unknown): Promise<void> {
  unsupported()
}

export async function handleBgFlag(_args?: unknown): Promise<void> {
  unsupported()
}
