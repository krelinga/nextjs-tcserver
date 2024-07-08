import { client } from '@/app/lib/grpc-service';
import {
  CheckAsyncTranscodeRequest,
  CheckAsyncTranscodeResponse,
  TranscodeState,
} from '@buf/krelinga_proto.bufbuild_es/krelinga/video/tcserver/v1/tcserver_pb'
import { enumName } from '@/app/lib/enums'

export const dynamic = 'force-dynamic'

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
      <h2 class='text-2xl'>{params.name}</h2>
      <p>State: {enumName(TranscodeState, resp.state)}</p>
    </div>
  );
}
