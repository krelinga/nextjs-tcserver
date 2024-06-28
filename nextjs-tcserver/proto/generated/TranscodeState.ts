// Original file: proto/tcserver.proto

export const TranscodeState = {
  UNKNOWN: 'UNKNOWN',
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  FAILED: 'FAILED',
} as const;

export type TranscodeState =
  | 'UNKNOWN'
  | 0
  | 'NOT_STARTED'
  | 4
  | 'IN_PROGRESS'
  | 1
  | 'DONE'
  | 2
  | 'FAILED'
  | 3

export type TranscodeState__Output = typeof TranscodeState[keyof typeof TranscodeState]
