import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '@/proto/generated/tcserverproto';
import path from 'path';

const PROTO_PATH = path.join(process.cwd(), './proto/tcserverproto.proto');

// suggested options for similarity to loading grpc.load behavior
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
  enums: String,
});

const tcServer = (
  grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
);

export const { TCServer } = tcServer;
