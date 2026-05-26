export type TipContext = string

export type Tip = {
  id: string
  text: string
  contexts?: TipContext[]
  [key: string]: unknown
}
