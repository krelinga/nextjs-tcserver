// Original file: proto/tcserver.proto

import type { TranscodeState as _TranscodeState, TranscodeState__Output as _TranscodeState__Output } from './TranscodeState';

export interface _CheckAsyncShowTranscodeReply_File {
  'episode'?: (string);
  'state'?: (_TranscodeState);
  'errorMessage'?: (string);
  'progress'?: (string);
}

export interface _CheckAsyncShowTranscodeReply_File__Output {
  'episode': (string);
  'state': (_TranscodeState__Output);
  'errorMessage': (string);
  'progress': (string);
}

export interface CheckAsyncShowTranscodeReply {
  'file'?: (_CheckAsyncShowTranscodeReply_File)[];
  'state'?: (_TranscodeState);
  'errorMessage'?: (string);
}

export interface CheckAsyncShowTranscodeReply__Output {
  'file': (_CheckAsyncShowTranscodeReply_File__Output)[];
  'state': (_TranscodeState__Output);
  'errorMessage': (string);
}
