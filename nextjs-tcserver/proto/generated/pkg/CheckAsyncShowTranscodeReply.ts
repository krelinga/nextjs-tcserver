// Original file: proto/tcserver.proto

import type { TranscodeState as _pkg_TranscodeState, TranscodeState__Output as _pkg_TranscodeState__Output } from '../pkg/TranscodeState';

export interface _pkg_CheckAsyncShowTranscodeReply_File {
  'episode'?: (string);
  'state'?: (_pkg_TranscodeState);
  'errorMessage'?: (string);
  'progress'?: (string);
}

export interface _pkg_CheckAsyncShowTranscodeReply_File__Output {
  'episode': (string);
  'state': (_pkg_TranscodeState__Output);
  'errorMessage': (string);
  'progress': (string);
}

export interface CheckAsyncShowTranscodeReply {
  'file'?: (_pkg_CheckAsyncShowTranscodeReply_File)[];
  'state'?: (_pkg_TranscodeState);
  'errorMessage'?: (string);
}

export interface CheckAsyncShowTranscodeReply__Output {
  'file': (_pkg_CheckAsyncShowTranscodeReply_File__Output)[];
  'state': (_pkg_TranscodeState__Output);
  'errorMessage': (string);
}
