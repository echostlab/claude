export async function waitForUrlEvent(timeoutMs = 0) {
  const delay = Math.max(0, Math.min(timeoutMs, 10))
  if (delay > 0) {
    await new Promise(resolve => setTimeout(resolve, delay))
  }
  return null
}
