export const protectedNamespaces = new Set<string>()

export function isProtectedNamespace(namespace: string): boolean {
  return protectedNamespaces.has(namespace)
}

export function checkProtectedNamespace(): boolean {
  const namespace = process.env.COO_NAMESPACE ?? process.env.NAMESPACE
  return namespace ? isProtectedNamespace(namespace) : false
}
