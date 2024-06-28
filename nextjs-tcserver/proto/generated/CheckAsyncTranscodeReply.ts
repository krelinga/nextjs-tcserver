// Original file: proto/tcserver.proto

import type { TranscodeState as _TranscodeState, TranscodeState__Output as _TranscodeState__Output } from './TranscodeState';

export interface CheckAsyncTranscodeReply {
  'state'?: (_TranscodeState);
  'errorMessage'?: (string);
  'progress'?: (string);
}

export interface CheckAsyncTranscodeReply__Output {
  'state': (_TranscodeState__Output);
  'errorMessage': (string);
  'progress': (string);
}
