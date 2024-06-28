// Original file: proto/tcserver.proto


export interface _pkg_StartAsyncSpreadTranscodeRequest_ProfileList {
  'profile'?: (string)[];
}

export interface _pkg_StartAsyncSpreadTranscodeRequest_ProfileList__Output {
  'profile': (string)[];
}

export interface StartAsyncSpreadTranscodeRequest {
  'name'?: (string);
  'inPath'?: (string);
  'outParentDirPath'?: (string);
  'profileList'?: (_pkg_StartAsyncSpreadTranscodeRequest_ProfileList | null);
}

export interface StartAsyncSpreadTranscodeRequest__Output {
  'name': (string);
  'inPath': (string);
  'outParentDirPath': (string);
  'profileList': (_pkg_StartAsyncSpreadTranscodeRequest_ProfileList__Output | null);
}
