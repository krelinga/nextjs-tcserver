// Original file: proto/tcserverproto.proto

import type { TranscodeState as _TranscodeState, TranscodeState__Output as _TranscodeState__Output } from './TranscodeState';

export interface _ListAsyncTranscodesReply_Op {
  'name'?: (string);
  'type'?: (_ListAsyncTranscodesReply_Op_Type);
  'state'?: (_TranscodeState);
}

export interface _ListAsyncTranscodesReply_Op__Output {
  'name': (string);
  'type': (_ListAsyncTranscodesReply_Op_Type__Output);
  'state': (_TranscodeState__Output);
}

// Original file: proto/tcserverproto.proto

export const _ListAsyncTranscodesReply_Op_Type = {
  UNKNOWN: 'UNKNOWN',
  SINGLE_FILE: 'SINGLE_FILE',
  SHOW: 'SHOW',
  SPREAD: 'SPREAD',
} as const;

export type _ListAsyncTranscodesReply_Op_Type =
  | 'UNKNOWN'
  | 0
  | 'SINGLE_FILE'
  | 1
  | 'SHOW'
  | 2
  | 'SPREAD'
  | 3

export type _ListAsyncTranscodesReply_Op_Type__Output = typeof _ListAsyncTranscodesReply_Op_Type[keyof typeof _ListAsyncTranscodesReply_Op_Type]

export interface ListAsyncTranscodesReply {
  'op'?: (_ListAsyncTranscodesReply_Op)[];
}

export interface ListAsyncTranscodesReply__Output {
  'op': (_ListAsyncTranscodesReply_Op__Output)[];
}
