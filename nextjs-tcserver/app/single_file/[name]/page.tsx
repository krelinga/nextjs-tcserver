import { client } from '@/app/lib/grpc-service';
import { CheckAsyncTranscodeRequest, CheckAsyncTranscodeResponse } from '@buf/krelinga_proto.bufbuild_es/krelinga/video/tcserver/v1/tcserver_pb'

export default async function SingleFile({
  params
}: {
  params: {
    name: string
  }
}) {
  const req = new CheckAsyncTranscodeRequest({
    name: params.name,
  })
  const resp = await client.checkAsyncTranscode(req)
  return (
    <div>
      <h1>{params.name}</h1>
      <p>State: {resp.state}</p>
    </div>
  );
}
