import { TcServer } from '@/app/lib/grpc-service';
import Table from '@/app/ui/table';

interface Props {
  numTranscodes: number;
}

export const dynamic = 'force-dynamic'

export default async function Home() {
  const server = new TcServer()
  const { reply, error } = await server.listAsyncTranscodesP()
  console.log("reply: ", reply)
  console.log("error: ", error)
  return (
    <main>
      <Table reply={reply} />
    </main>
  );
}
