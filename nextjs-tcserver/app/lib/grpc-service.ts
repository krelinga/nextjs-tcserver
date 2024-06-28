import { TCServer } from '../lib/grpc-client';
import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

const target = '192.168.86.44:25000';

// TODO: I think the entire purpose of this is to wrap the generated RPC methods in a promise-yielding layer.
export class TcServer extends TCServer {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async listAsyncTranscodesP() {
    const promiseFn = promisify(this.listAsyncTranscodes).bind(this);
    // TODO: I have no idea if this is ideomatic at all.
    return await promiseFn({})
      .then((reply) => ({ reply, error: null }))
      .catch((error) => ({ error, reply: null }));
  }
}
