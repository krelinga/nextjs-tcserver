// Original file: proto/tcserver.proto

import type { TranscodeState as _pkg_TranscodeState, TranscodeState__Output as _pkg_TranscodeState__Output } from '../pkg/TranscodeState';

export interface _pkg_ListAsyncTranscodesReply_Op {
  'name'?: (string);
  'type'?: (_pkg_ListAsyncTranscodesReply_Op_Type);
  'state'?: (_pkg_TranscodeState);
}

export interface _pkg_ListAsyncTranscodesReply_Op__Output {
  'name': (string);
  'type': (_pkg_ListAsyncTranscodesReply_Op_Type__Output);
  'state': (_pkg_TranscodeState__Output);
}

// Original file: proto/tcserver.proto

export const _pkg_ListAsyncTranscodesReply_Op_Type = {
  UNKNOWN: 'UNKNOWN',
  SINGLE_FILE: 'SINGLE_FILE',
  SHOW: 'SHOW',
  SPREAD: 'SPREAD',
} as const;

export type _pkg_ListAsyncTranscodesReply_Op_Type =
  | 'UNKNOWN'
  | 0
  | 'SINGLE_FILE'
  | 1
  | 'SHOW'
  | 2
  | 'SPREAD'
  | 3

export type _pkg_ListAsyncTranscodesReply_Op_Type__Output = typeof _pkg_ListAsyncTranscodesReply_Op_Type[keyof typeof _pkg_ListAsyncTranscodesReply_Op_Type]

export interface ListAsyncTranscodesReply {
  'op'?: (_pkg_ListAsyncTranscodesReply_Op)[];
}

export interface ListAsyncTranscodesReply__Output {
  'op': (_pkg_ListAsyncTranscodesReply_Op__Output)[];
}
