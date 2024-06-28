// Original file: proto/tcserver.proto

import type { TranscodeState as _pkg_TranscodeState, TranscodeState__Output as _pkg_TranscodeState__Output } from '../pkg/TranscodeState';

export interface CheckAsyncTranscodeReply {
  'state'?: (_pkg_TranscodeState);
  'errorMessage'?: (string);
  'progress'?: (string);
}

export interface CheckAsyncTranscodeReply__Output {
  'state': (_pkg_TranscodeState__Output);
  'errorMessage': (string);
  'progress': (string);
}
