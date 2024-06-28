// Original file: proto/tcserver.proto

import type { TranscodeState as _pkg_TranscodeState, TranscodeState__Output as _pkg_TranscodeState__Output } from '../pkg/TranscodeState';

export interface _pkg_CheckAsyncSpreadTranscodeReply_Profile {
  'profile'?: (string);
  'state'?: (_pkg_TranscodeState);
  'errorMessage'?: (string);
  'progress'?: (string);
}

export interface _pkg_CheckAsyncSpreadTranscodeReply_Profile__Output {
  'profile': (string);
  'state': (_pkg_TranscodeState__Output);
  'errorMessage': (string);
  'progress': (string);
}

export interface CheckAsyncSpreadTranscodeReply {
  'profile'?: (_pkg_CheckAsyncSpreadTranscodeReply_Profile)[];
  'state'?: (_pkg_TranscodeState);
  'errorMessage'?: (string);
}

export interface CheckAsyncSpreadTranscodeReply__Output {
  'profile': (_pkg_CheckAsyncSpreadTranscodeReply_Profile__Output)[];
  'state': (_pkg_TranscodeState__Output);
  'errorMessage': (string);
}
