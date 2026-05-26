export function isNativeAudioAvailable() {
  return false
}

export async function startRecording() {
  return { stop: stopRecording }
}

export async function stopRecording() {
  return Buffer.alloc(0)
}

export function cancelRecording() {}

export function getAudioLevel() {
  return 0
}
