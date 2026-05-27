export type SSHSession = {
  proc: { exitCode: number | null; signalCode: string | null }
  proxy: { stop(): void }
  getStderrTail(): string
  createManager(callbacks: unknown): {
    connect(): void
    disconnect(): void
    sendMessage(content: unknown): Promise<boolean>
    sendInterrupt(): void
    respondToPermissionRequest(requestId: string, response: unknown): void
  }
}

export class SSHSessionError extends Error {}

function unsupported(): never {
  throw new SSHSessionError('SSH mode is unavailable in this leaked build')
}

export function createSSHSession(_options: unknown): SSHSession {
  unsupported()
}

export function createLocalSSHSession(_options: unknown): SSHSession {
  unsupported()
}
