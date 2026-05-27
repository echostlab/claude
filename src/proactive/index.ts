type Listener = () => void

const listeners = new Set<Listener>()

let active = false
let paused = false
let contextBlocked = false

function emit(): void {
  for (const listener of listeners) {
    listener()
  }
}

export function activateProactive(_source?: string): void {
  active = true
  paused = false
  emit()
}

export function deactivateProactive(): void {
  active = false
  paused = false
  emit()
}

export function pauseProactive(): void {
  paused = true
  emit()
}

export function resumeProactive(): void {
  paused = false
  emit()
}

export function setContextBlocked(blocked: boolean): void {
  contextBlocked = blocked
  emit()
}

export function isProactiveActive(): boolean {
  return active && !paused && !contextBlocked
}

export function getNextTickAt(): number | null {
  return null
}

export function subscribeToProactiveChanges(listener: Listener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
