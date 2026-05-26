import sharpLib from 'sharp'

export type NativeImageProcessor = {
  hasClipboardImage?: () => boolean | Promise<boolean>
  readClipboardImage?: () => Promise<Buffer | null> | Buffer | null
  [key: string]: unknown
}

export declare function getNativeModule(): NativeImageProcessor | null
export declare const sharp: typeof sharpLib
export default sharpLib
