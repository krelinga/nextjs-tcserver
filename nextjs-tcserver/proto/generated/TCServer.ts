// Original file: proto/tcserver.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CheckAsyncShowTranscodeReply as _CheckAsyncShowTranscodeReply, CheckAsyncShowTranscodeReply__Output as _CheckAsyncShowTranscodeReply__Output } from './CheckAsyncShowTranscodeReply';
import type { CheckAsyncShowTranscodeRequest as _CheckAsyncShowTranscodeRequest, CheckAsyncShowTranscodeRequest__Output as _CheckAsyncShowTranscodeRequest__Output } from './CheckAsyncShowTranscodeRequest';
import type { CheckAsyncSpreadTranscodeReply as _CheckAsyncSpreadTranscodeReply, CheckAsyncSpreadTranscodeReply__Output as _CheckAsyncSpreadTranscodeReply__Output } from './CheckAsyncSpreadTranscodeReply';
import type { CheckAsyncSpreadTranscodeRequest as _CheckAsyncSpreadTranscodeRequest, CheckAsyncSpreadTranscodeRequest__Output as _CheckAsyncSpreadTranscodeRequest__Output } from './CheckAsyncSpreadTranscodeRequest';
import type { CheckAsyncTranscodeReply as _CheckAsyncTranscodeReply, CheckAsyncTranscodeReply__Output as _CheckAsyncTranscodeReply__Output } from './CheckAsyncTranscodeReply';
import type { CheckAsyncTranscodeRequest as _CheckAsyncTranscodeRequest, CheckAsyncTranscodeRequest__Output as _CheckAsyncTranscodeRequest__Output } from './CheckAsyncTranscodeRequest';
import type { ListAsyncTranscodesReply as _ListAsyncTranscodesReply, ListAsyncTranscodesReply__Output as _ListAsyncTranscodesReply__Output } from './ListAsyncTranscodesReply';
import type { ListAsyncTranscodesRequest as _ListAsyncTranscodesRequest, ListAsyncTranscodesRequest__Output as _ListAsyncTranscodesRequest__Output } from './ListAsyncTranscodesRequest';
import type { StartAsyncShowTranscodeReply as _StartAsyncShowTranscodeReply, StartAsyncShowTranscodeReply__Output as _StartAsyncShowTranscodeReply__Output } from './StartAsyncShowTranscodeReply';
import type { StartAsyncShowTranscodeRequest as _StartAsyncShowTranscodeRequest, StartAsyncShowTranscodeRequest__Output as _StartAsyncShowTranscodeRequest__Output } from './StartAsyncShowTranscodeRequest';
import type { StartAsyncSpreadTranscodeReply as _StartAsyncSpreadTranscodeReply, StartAsyncSpreadTranscodeReply__Output as _StartAsyncSpreadTranscodeReply__Output } from './StartAsyncSpreadTranscodeReply';
import type { StartAsyncSpreadTranscodeRequest as _StartAsyncSpreadTranscodeRequest, StartAsyncSpreadTranscodeRequest__Output as _StartAsyncSpreadTranscodeRequest__Output } from './StartAsyncSpreadTranscodeRequest';
import type { StartAsyncTranscodeReply as _StartAsyncTranscodeReply, StartAsyncTranscodeReply__Output as _StartAsyncTranscodeReply__Output } from './StartAsyncTranscodeReply';
import type { StartAsyncTranscodeRequest as _StartAsyncTranscodeRequest, StartAsyncTranscodeRequest__Output as _StartAsyncTranscodeRequest__Output } from './StartAsyncTranscodeRequest';

export interface TCServerClient extends grpc.Client {
  CheckAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _CheckAsyncShowTranscodeRequest, callback: grpc.requestCallback<_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  CheckAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _CheckAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  CheckAsyncTranscode(argument: _CheckAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncTranscode(argument: _CheckAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncTranscode(argument: _CheckAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncTranscode(argument: _CheckAsyncTranscodeRequest, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _CheckAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _CheckAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _CheckAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _CheckAsyncTranscodeRequest, callback: grpc.requestCallback<_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  ListAsyncTranscodes(argument: _ListAsyncTranscodesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  ListAsyncTranscodes(argument: _ListAsyncTranscodesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  ListAsyncTranscodes(argument: _ListAsyncTranscodesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  ListAsyncTranscodes(argument: _ListAsyncTranscodesRequest, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _ListAsyncTranscodesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _ListAsyncTranscodesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _ListAsyncTranscodesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _ListAsyncTranscodesRequest, callback: grpc.requestCallback<_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  
  StartAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _StartAsyncShowTranscodeRequest, callback: grpc.requestCallback<_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  StartAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _StartAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  StartAsyncTranscode(argument: _StartAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncTranscode(argument: _StartAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncTranscode(argument: _StartAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncTranscode(argument: _StartAsyncTranscodeRequest, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _StartAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _StartAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _StartAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _StartAsyncTranscodeRequest, callback: grpc.requestCallback<_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  
}

export interface TCServerHandlers extends grpc.UntypedServiceImplementation {
  CheckAsyncShowTranscode: grpc.handleUnaryCall<_CheckAsyncShowTranscodeRequest__Output, _CheckAsyncShowTranscodeReply>;
  
  CheckAsyncSpreadTranscode: grpc.handleUnaryCall<_CheckAsyncSpreadTranscodeRequest__Output, _CheckAsyncSpreadTranscodeReply>;
  
  CheckAsyncTranscode: grpc.handleUnaryCall<_CheckAsyncTranscodeRequest__Output, _CheckAsyncTranscodeReply>;
  
  ListAsyncTranscodes: grpc.handleUnaryCall<_ListAsyncTranscodesRequest__Output, _ListAsyncTranscodesReply>;
  
  StartAsyncShowTranscode: grpc.handleUnaryCall<_StartAsyncShowTranscodeRequest__Output, _StartAsyncShowTranscodeReply>;
  
  StartAsyncSpreadTranscode: grpc.handleUnaryCall<_StartAsyncSpreadTranscodeRequest__Output, _StartAsyncSpreadTranscodeReply>;
  
  StartAsyncTranscode: grpc.handleUnaryCall<_StartAsyncTranscodeRequest__Output, _StartAsyncTranscodeReply>;
  
}

export interface TCServerDefinition extends grpc.ServiceDefinition {
  CheckAsyncShowTranscode: MethodDefinition<_CheckAsyncShowTranscodeRequest, _CheckAsyncShowTranscodeReply, _CheckAsyncShowTranscodeRequest__Output, _CheckAsyncShowTranscodeReply__Output>
  CheckAsyncSpreadTranscode: MethodDefinition<_CheckAsyncSpreadTranscodeRequest, _CheckAsyncSpreadTranscodeReply, _CheckAsyncSpreadTranscodeRequest__Output, _CheckAsyncSpreadTranscodeReply__Output>
  CheckAsyncTranscode: MethodDefinition<_CheckAsyncTranscodeRequest, _CheckAsyncTranscodeReply, _CheckAsyncTranscodeRequest__Output, _CheckAsyncTranscodeReply__Output>
  ListAsyncTranscodes: MethodDefinition<_ListAsyncTranscodesRequest, _ListAsyncTranscodesReply, _ListAsyncTranscodesRequest__Output, _ListAsyncTranscodesReply__Output>
  StartAsyncShowTranscode: MethodDefinition<_StartAsyncShowTranscodeRequest, _StartAsyncShowTranscodeReply, _StartAsyncShowTranscodeRequest__Output, _StartAsyncShowTranscodeReply__Output>
  StartAsyncSpreadTranscode: MethodDefinition<_StartAsyncSpreadTranscodeRequest, _StartAsyncSpreadTranscodeReply, _StartAsyncSpreadTranscodeRequest__Output, _StartAsyncSpreadTranscodeReply__Output>
  StartAsyncTranscode: MethodDefinition<_StartAsyncTranscodeRequest, _StartAsyncTranscodeReply, _StartAsyncTranscodeRequest__Output, _StartAsyncTranscodeReply__Output>
}
