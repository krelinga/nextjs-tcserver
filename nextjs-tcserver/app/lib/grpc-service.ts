import { createPromiseClient } from '@connectrpc/connect';
import { TCService } from '@buf/krelinga_proto.connectrpc_es/krelinga/video/tcserver/v1/tcserver_connect';
import { createConnectTransport } from "@connectrpc/connect-node";

const target = 'http://192.168.86.35:25000';

const transport = createConnectTransport({
  baseUrl: target,
  httpVersion: '1.1'
});

const client = createPromiseClient(TCService, transport)

export { client }
