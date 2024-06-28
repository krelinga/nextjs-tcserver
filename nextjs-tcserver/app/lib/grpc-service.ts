import { TCServer } from '../lib/grpc-client';
import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';
import { ListAsyncTranscodesReply } from '@/proto/generated/pkg/ListAsyncTranscodesReply'

const target = '192.168.86.44:25000';

export interface TranscodesOrError {
  reply?: ListAsyncTranscodesReply;
  error?: Error;
};

// TODO: I think the entire purpose of this is to wrap the generated RPC methods in a promise-yielding layer.
export class TcServer extends TCServer {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async listAsyncTranscodesP(): Promise<TranscodesOrError> {
    const promiseFn = promisify(this.listAsyncTranscodes).bind(this);
    // TODO: I have no idea if this is ideomatic at all.
    return await promiseFn({})
      .then((reply) => ({ reply }))
      .catch((error) => ({ error }));
  }
}
