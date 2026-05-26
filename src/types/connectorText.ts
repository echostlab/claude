export type ConnectorText = string
export type ConnectorTextBlock = { type: 'text'; text: string }
export type ConnectorTextDelta = { type: 'text_delta'; text: string }

export function isConnectorTextBlock(
  value: unknown,
): value is ConnectorTextBlock {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    'text' in value &&
    (value as { type?: unknown }).type === 'text' &&
    typeof (value as { text?: unknown }).text === 'string'
  )
}
