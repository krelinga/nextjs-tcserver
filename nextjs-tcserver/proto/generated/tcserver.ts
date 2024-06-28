import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { TCServerClient as _TCServerClient, TCServerDefinition as _TCServerDefinition } from './TCServer';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CheckAsyncShowTranscodeReply: MessageTypeDefinition
  CheckAsyncShowTranscodeRequest: MessageTypeDefinition
  CheckAsyncSpreadTranscodeReply: MessageTypeDefinition
  CheckAsyncSpreadTranscodeRequest: MessageTypeDefinition
  CheckAsyncTranscodeReply: MessageTypeDefinition
  CheckAsyncTranscodeRequest: MessageTypeDefinition
  ListAsyncTranscodesReply: MessageTypeDefinition
  ListAsyncTranscodesRequest: MessageTypeDefinition
  StartAsyncShowTranscodeReply: MessageTypeDefinition
  StartAsyncShowTranscodeRequest: MessageTypeDefinition
  StartAsyncSpreadTranscodeReply: MessageTypeDefinition
  StartAsyncSpreadTranscodeRequest: MessageTypeDefinition
  StartAsyncTranscodeReply: MessageTypeDefinition
  StartAsyncTranscodeRequest: MessageTypeDefinition
  TCServer: SubtypeConstructor<typeof grpc.Client, _TCServerClient> & { service: _TCServerDefinition }
  TranscodeState: EnumTypeDefinition
}

