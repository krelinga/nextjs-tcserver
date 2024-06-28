// Original file: proto/tcserverproto.proto


export interface _StartAsyncSpreadTranscodeRequest_ProfileList {
  'profile'?: (string)[];
}

export interface _StartAsyncSpreadTranscodeRequest_ProfileList__Output {
  'profile': (string)[];
}

export interface StartAsyncSpreadTranscodeRequest {
  'name'?: (string);
  'inPath'?: (string);
  'outParentDirPath'?: (string);
  'profileList'?: (_StartAsyncSpreadTranscodeRequest_ProfileList | null);
}

export interface StartAsyncSpreadTranscodeRequest__Output {
  'name': (string);
  'inPath': (string);
  'outParentDirPath': (string);
  'profileList': (_StartAsyncSpreadTranscodeRequest_ProfileList__Output | null);
}
