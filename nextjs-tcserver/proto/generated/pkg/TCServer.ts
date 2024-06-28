// Original file: proto/tcserver.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CheckAsyncShowTranscodeReply as _pkg_CheckAsyncShowTranscodeReply, CheckAsyncShowTranscodeReply__Output as _pkg_CheckAsyncShowTranscodeReply__Output } from '../pkg/CheckAsyncShowTranscodeReply';
import type { CheckAsyncShowTranscodeRequest as _pkg_CheckAsyncShowTranscodeRequest, CheckAsyncShowTranscodeRequest__Output as _pkg_CheckAsyncShowTranscodeRequest__Output } from '../pkg/CheckAsyncShowTranscodeRequest';
import type { CheckAsyncSpreadTranscodeReply as _pkg_CheckAsyncSpreadTranscodeReply, CheckAsyncSpreadTranscodeReply__Output as _pkg_CheckAsyncSpreadTranscodeReply__Output } from '../pkg/CheckAsyncSpreadTranscodeReply';
import type { CheckAsyncSpreadTranscodeRequest as _pkg_CheckAsyncSpreadTranscodeRequest, CheckAsyncSpreadTranscodeRequest__Output as _pkg_CheckAsyncSpreadTranscodeRequest__Output } from '../pkg/CheckAsyncSpreadTranscodeRequest';
import type { CheckAsyncTranscodeReply as _pkg_CheckAsyncTranscodeReply, CheckAsyncTranscodeReply__Output as _pkg_CheckAsyncTranscodeReply__Output } from '../pkg/CheckAsyncTranscodeReply';
import type { CheckAsyncTranscodeRequest as _pkg_CheckAsyncTranscodeRequest, CheckAsyncTranscodeRequest__Output as _pkg_CheckAsyncTranscodeRequest__Output } from '../pkg/CheckAsyncTranscodeRequest';
import type { ListAsyncTranscodesReply as _pkg_ListAsyncTranscodesReply, ListAsyncTranscodesReply__Output as _pkg_ListAsyncTranscodesReply__Output } from '../pkg/ListAsyncTranscodesReply';
import type { ListAsyncTranscodesRequest as _pkg_ListAsyncTranscodesRequest, ListAsyncTranscodesRequest__Output as _pkg_ListAsyncTranscodesRequest__Output } from '../pkg/ListAsyncTranscodesRequest';
import type { StartAsyncShowTranscodeReply as _pkg_StartAsyncShowTranscodeReply, StartAsyncShowTranscodeReply__Output as _pkg_StartAsyncShowTranscodeReply__Output } from '../pkg/StartAsyncShowTranscodeReply';
import type { StartAsyncShowTranscodeRequest as _pkg_StartAsyncShowTranscodeRequest, StartAsyncShowTranscodeRequest__Output as _pkg_StartAsyncShowTranscodeRequest__Output } from '../pkg/StartAsyncShowTranscodeRequest';
import type { StartAsyncSpreadTranscodeReply as _pkg_StartAsyncSpreadTranscodeReply, StartAsyncSpreadTranscodeReply__Output as _pkg_StartAsyncSpreadTranscodeReply__Output } from '../pkg/StartAsyncSpreadTranscodeReply';
import type { StartAsyncSpreadTranscodeRequest as _pkg_StartAsyncSpreadTranscodeRequest, StartAsyncSpreadTranscodeRequest__Output as _pkg_StartAsyncSpreadTranscodeRequest__Output } from '../pkg/StartAsyncSpreadTranscodeRequest';
import type { StartAsyncTranscodeReply as _pkg_StartAsyncTranscodeReply, StartAsyncTranscodeReply__Output as _pkg_StartAsyncTranscodeReply__Output } from '../pkg/StartAsyncTranscodeReply';
import type { StartAsyncTranscodeRequest as _pkg_StartAsyncTranscodeRequest, StartAsyncTranscodeRequest__Output as _pkg_StartAsyncTranscodeRequest__Output } from '../pkg/StartAsyncTranscodeRequest';

export interface TCServerClient extends grpc.Client {
  CheckAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncShowTranscode(argument: _pkg_CheckAsyncShowTranscodeRequest, callback: grpc.requestCallback<_pkg_CheckAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  CheckAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncSpreadTranscode(argument: _pkg_CheckAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_pkg_CheckAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  CheckAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  CheckAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  checkAsyncTranscode(argument: _pkg_CheckAsyncTranscodeRequest, callback: grpc.requestCallback<_pkg_CheckAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  ListAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  ListAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  ListAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  ListAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  listAsyncTranscodes(argument: _pkg_ListAsyncTranscodesRequest, callback: grpc.requestCallback<_pkg_ListAsyncTranscodesReply__Output>): grpc.ClientUnaryCall;
  
  StartAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncShowTranscode(argument: _pkg_StartAsyncShowTranscodeRequest, callback: grpc.requestCallback<_pkg_StartAsyncShowTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  StartAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncSpreadTranscode(argument: _pkg_StartAsyncSpreadTranscodeRequest, callback: grpc.requestCallback<_pkg_StartAsyncSpreadTranscodeReply__Output>): grpc.ClientUnaryCall;
  
  StartAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  StartAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  startAsyncTranscode(argument: _pkg_StartAsyncTranscodeRequest, callback: grpc.requestCallback<_pkg_StartAsyncTranscodeReply__Output>): grpc.ClientUnaryCall;
  
}

export interface TCServerHandlers extends grpc.UntypedServiceImplementation {
  CheckAsyncShowTranscode: grpc.handleUnaryCall<_pkg_CheckAsyncShowTranscodeRequest__Output, _pkg_CheckAsyncShowTranscodeReply>;
  
  CheckAsyncSpreadTranscode: grpc.handleUnaryCall<_pkg_CheckAsyncSpreadTranscodeRequest__Output, _pkg_CheckAsyncSpreadTranscodeReply>;
  
  CheckAsyncTranscode: grpc.handleUnaryCall<_pkg_CheckAsyncTranscodeRequest__Output, _pkg_CheckAsyncTranscodeReply>;
  
  ListAsyncTranscodes: grpc.handleUnaryCall<_pkg_ListAsyncTranscodesRequest__Output, _pkg_ListAsyncTranscodesReply>;
  
  StartAsyncShowTranscode: grpc.handleUnaryCall<_pkg_StartAsyncShowTranscodeRequest__Output, _pkg_StartAsyncShowTranscodeReply>;
  
  StartAsyncSpreadTranscode: grpc.handleUnaryCall<_pkg_StartAsyncSpreadTranscodeRequest__Output, _pkg_StartAsyncSpreadTranscodeReply>;
  
  StartAsyncTranscode: grpc.handleUnaryCall<_pkg_StartAsyncTranscodeRequest__Output, _pkg_StartAsyncTranscodeReply>;
  
}

export interface TCServerDefinition extends grpc.ServiceDefinition {
  CheckAsyncShowTranscode: MethodDefinition<_pkg_CheckAsyncShowTranscodeRequest, _pkg_CheckAsyncShowTranscodeReply, _pkg_CheckAsyncShowTranscodeRequest__Output, _pkg_CheckAsyncShowTranscodeReply__Output>
  CheckAsyncSpreadTranscode: MethodDefinition<_pkg_CheckAsyncSpreadTranscodeRequest, _pkg_CheckAsyncSpreadTranscodeReply, _pkg_CheckAsyncSpreadTranscodeRequest__Output, _pkg_CheckAsyncSpreadTranscodeReply__Output>
  CheckAsyncTranscode: MethodDefinition<_pkg_CheckAsyncTranscodeRequest, _pkg_CheckAsyncTranscodeReply, _pkg_CheckAsyncTranscodeRequest__Output, _pkg_CheckAsyncTranscodeReply__Output>
  ListAsyncTranscodes: MethodDefinition<_pkg_ListAsyncTranscodesRequest, _pkg_ListAsyncTranscodesReply, _pkg_ListAsyncTranscodesRequest__Output, _pkg_ListAsyncTranscodesReply__Output>
  StartAsyncShowTranscode: MethodDefinition<_pkg_StartAsyncShowTranscodeRequest, _pkg_StartAsyncShowTranscodeReply, _pkg_StartAsyncShowTranscodeRequest__Output, _pkg_StartAsyncShowTranscodeReply__Output>
  StartAsyncSpreadTranscode: MethodDefinition<_pkg_StartAsyncSpreadTranscodeRequest, _pkg_StartAsyncSpreadTranscodeReply, _pkg_StartAsyncSpreadTranscodeRequest__Output, _pkg_StartAsyncSpreadTranscodeReply__Output>
  StartAsyncTranscode: MethodDefinition<_pkg_StartAsyncTranscodeRequest, _pkg_StartAsyncTranscodeReply, _pkg_StartAsyncTranscodeRequest__Output, _pkg_StartAsyncTranscodeReply__Output>
}
