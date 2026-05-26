export const DEFAULT_GRANT_FLAGS = {
  clipboardRead: false,
  clipboardWrite: false,
  systemKeyCombos: false,
}

export const API_RESIZE_PARAMS = {
  maxWidth: 1280,
  maxHeight: 800,
}

export function targetImageSize(width, height) {
  return { width, height }
}

export function buildComputerUseTools() {
  return []
}

export function createComputerUseMcpServer() {
  return {
    setRequestHandler() {},
    async connect() {},
  }
}

export function bindSessionContext(ctx) {
  return {
    ctx,
    dispatch: async () => ({ content: [], isError: true }),
  }
}
