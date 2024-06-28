import { ListAsyncTranscodeReply } from '@/proto/generated/ListAsyncTranscodeReply'

export default function Table({ reply } : { reply: ListAsyncTranscodeReply; }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        { reply.op.map(op => (
          <tr key={op.name}>
            <td>{op.name}</td>
            <td>{op.type}</td>
            <td>{op.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
