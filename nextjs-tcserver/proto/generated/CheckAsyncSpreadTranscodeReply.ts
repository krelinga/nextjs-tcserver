// Original file: proto/tcserver.proto

import type { TranscodeState as _TranscodeState, TranscodeState__Output as _TranscodeState__Output } from './TranscodeState';

export interface _CheckAsyncSpreadTranscodeReply_Profile {
  'profile'?: (string);
  'state'?: (_TranscodeState);
  'errorMessage'?: (string);
  'progress'?: (string);
}

export interface _CheckAsyncSpreadTranscodeReply_Profile__Output {
  'profile': (string);
  'state': (_TranscodeState__Output);
  'errorMessage': (string);
  'progress': (string);
}

export interface CheckAsyncSpreadTranscodeReply {
  'profile'?: (_CheckAsyncSpreadTranscodeReply_Profile)[];
  'state'?: (_TranscodeState);
  'errorMessage'?: (string);
}

export interface CheckAsyncSpreadTranscodeReply__Output {
  'profile': (_CheckAsyncSpreadTranscodeReply_Profile__Output)[];
  'state': (_TranscodeState__Output);
  'errorMessage': (string);
}
