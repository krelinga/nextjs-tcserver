import { TcServer } from '@/app/lib/grpc-service';


interface Props {
  numTranscodes: number;
}

export default async function Home() {
  const server = new TcServer()
  const { reply, error } = await server.listAsyncTranscodesP()
  console.log("reply: ", reply)
  console.log("error: ", error)
  return (
    <main>
      { reply.op.length }
    </main>
  );
}
