import { client } from '@/app/lib/grpc-service';
import Table from '@/app/ui/table';
import { ListAsyncTranscodesRequest } from '@buf/krelinga_proto.bufbuild_es/krelinga/video/tcserver/v1/tcserver_pb'

interface Props {
  numTranscodes: number;
}

export const dynamic = 'force-dynamic'

export default async function Home() {
  const reply = await client.listAsyncTranscodes(new ListAsyncTranscodesRequest())
  console.log("reply: ", reply)
  return (
    <main>
      <Table reply={reply} />
    </main>
  );
}
