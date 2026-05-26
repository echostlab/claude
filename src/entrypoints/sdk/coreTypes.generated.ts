export type ApiKeySource = string
export type PermissionMode = string
export type SDKStatus = string
export type HookEvent =
  | 'PreToolUse'
  | 'PostToolUse'
  | 'PostToolUseFailure'
  | 'Notification'
  | 'UserPromptSubmit'
  | 'SessionStart'
  | 'SessionEnd'
  | 'Stop'
  | 'StopFailure'
  | 'SubagentStart'
  | 'SubagentStop'
  | 'PreCompact'
  | 'PostCompact'
  | 'PermissionRequest'
  | 'PermissionDenied'
  | 'Setup'
  | 'TeammateIdle'
  | 'TaskCreated'
  | 'TaskCompleted'
  | 'Elicitation'
  | 'ElicitationResult'
  | 'ConfigChange'
  | 'WorktreeCreate'
  | 'WorktreeRemove'
  | 'InstructionsLoaded'
  | 'CwdChanged'
  | 'FileChanged'
export type ExitReason =
  | 'clear'
  | 'resume'
  | 'logout'
  | 'prompt_input_exit'
  | 'other'
  | 'bypass_permissions_disabled'

export type PermissionUpdate = Record<string, unknown>
export type PermissionResult = Record<string, unknown>
export type ModelUsage = {
  input_tokens?: number
  output_tokens?: number
  cache_creation_input_tokens?: number
  cache_read_input_tokens?: number
  [key: string]: unknown
}
export type ModelInfo = {
  id?: string
  display_name?: string
  [key: string]: unknown
}
export type SDKAssistantMessageError = {
  type?: string
  message?: string
  [key: string]: unknown
}
export type SDKRateLimitInfo = Record<string, unknown>
export type SDKResultSuccess = Record<string, unknown>
export type RewindFilesResult = Record<string, unknown>
export type McpServerStatus = {
  name?: string
  status?: string
  [key: string]: unknown
}
export type McpServerConfigForProcessTransport = Record<string, unknown>

export type SDKAssistantMessage = {
  type: 'assistant'
  uuid: string
  message: unknown
  session_id?: string
  status?: SDKStatus
  [key: string]: unknown
}

export type SDKUserMessage = {
  type: 'user'
  uuid?: string
  message: unknown
  timestamp?: string
  isSynthetic?: boolean
  [key: string]: unknown
}

export type SDKUserMessageReplay = SDKUserMessage & {
  replay?: boolean
}

export type SDKCompactBoundaryMessage = {
  type: 'system'
  subtype: 'compact_boundary'
  uuid?: string
  compact_metadata: unknown
  [key: string]: unknown
}

export type SDKPermissionDenial = {
  type?: string
  reason?: string
  [key: string]: unknown
}

export type SDKSessionInfo = {
  sessionId?: string
  id?: string
  title?: string
  [key: string]: unknown
}

export type SDKSystemMessage = {
  type: 'system'
  subtype: string
  uuid?: string
  [key: string]: unknown
}

export type SDKResultMessage = SDKAssistantMessage | SDKSystemMessage

export type SDKMessage =
  | SDKAssistantMessage
  | SDKUserMessage
  | SDKSystemMessage

export type HookInput = {
  session_id?: string
  cwd?: string
  hook_event_name?: HookEvent
  [key: string]: unknown
}

export type NotificationHookInput = HookInput
export type PostToolUseHookInput = HookInput
export type PostToolUseFailureHookInput = HookInput
export type PermissionDeniedHookInput = HookInput
export type PreCompactHookInput = HookInput
export type PostCompactHookInput = HookInput
export type PreToolUseHookInput = HookInput
export type SessionStartHookInput = HookInput
export type SessionEndHookInput = HookInput
export type SetupHookInput = HookInput
export type StopHookInput = HookInput
export type StopFailureHookInput = HookInput
export type SubagentStartHookInput = HookInput
export type SubagentStopHookInput = HookInput
export type TeammateIdleHookInput = HookInput
export type TaskCreatedHookInput = HookInput
export type TaskCompletedHookInput = HookInput
export type ConfigChangeHookInput = HookInput
export type CwdChangedHookInput = HookInput
export type FileChangedHookInput = HookInput
export type InstructionsLoadedHookInput = HookInput
export type UserPromptSubmitHookInput = HookInput
export type PermissionRequestHookInput = HookInput
export type ElicitationHookInput = HookInput
export type ElicitationResultHookInput = HookInput

export type SyncHookJSONOutput = {
  continue?: boolean
  suppressOutput?: boolean
  stopReason?: string
  decision?: 'approve' | 'block'
  reason?: string
  systemMessage?: string
  hookSpecificOutput?:
    | {
        hookEventName: 'PreToolUse'
        permissionDecision?: string
        permissionDecisionReason?: string
        updatedInput?: Record<string, unknown>
        additionalContext?: string
      }
    | {
        hookEventName: 'UserPromptSubmit'
        additionalContext?: string
      }
    | {
        hookEventName: 'SessionStart'
        additionalContext?: string
        initialUserMessage?: string
        watchPaths?: string[]
      }
    | {
        hookEventName: 'Setup' | 'SubagentStart' | 'PostToolUseFailure' | 'Notification'
        additionalContext?: string
      }
    | {
        hookEventName: 'PostToolUse'
        additionalContext?: string
        updatedMCPToolOutput?: unknown
      }
    | {
        hookEventName: 'PermissionDenied'
        retry?: boolean
      }
    | {
        hookEventName: 'PermissionRequest'
        decision:
          | {
              behavior: 'allow'
              updatedInput?: Record<string, unknown>
              updatedPermissions?: PermissionUpdate[]
            }
          | {
              behavior: 'deny'
              message?: string
              interrupt?: boolean
            }
      }
    | {
        hookEventName: 'Elicitation' | 'ElicitationResult'
        action?: 'accept' | 'decline' | 'cancel'
        content?: Record<string, unknown>
      }
    | {
        hookEventName: 'CwdChanged' | 'FileChanged'
        watchPaths?: string[]
      }
    | {
        hookEventName: 'WorktreeCreate'
        worktreePath: string
      }
}

export type AsyncHookJSONOutput = {
  async: true
  asyncTimeout?: number
}

export type HookJSONOutput = AsyncHookJSONOutput | SyncHookJSONOutput
