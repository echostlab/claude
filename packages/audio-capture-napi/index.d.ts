export declare function isNativeAudioAvailable(): boolean
export declare function startRecording(...args: unknown[]): Promise<{ stop: typeof stopRecording }>
export declare function stopRecording(...args: unknown[]): Promise<Buffer>
export declare function cancelRecording(...args: unknown[]): void
export declare function getAudioLevel(...args: unknown[]): number
