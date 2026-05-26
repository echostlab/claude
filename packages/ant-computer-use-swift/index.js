const tcc = {
  async checkAccessibility() {
    return false
  },
  async checkScreenRecording() {
    return false
  },
}

const apps = {
  async listInstalled() {
    return []
  },
}

export { tcc, apps }

export async function captureRegion() {
  return null
}

export async function captureExcluding() {
  return null
}

export async function resolvePrepareCapture() {
  return null
}
