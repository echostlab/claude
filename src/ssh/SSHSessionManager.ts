export class SSHSessionManager {
  connect(): void {}

  disconnect(): void {}

  async sendMessage(_content: unknown): Promise<boolean> {
    return false
  }

  sendInterrupt(): void {}

  respondToPermissionRequest(_requestId: string, _response: unknown): void {}
}
