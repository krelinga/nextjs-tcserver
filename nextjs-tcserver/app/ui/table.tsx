import { ListAsyncTranscodesResponse } from '@buf/krelinga_proto.bufbuild_es/krelinga/video/tcserver/v1/tcserver_pb'

export default function Table({ reply } : { reply?: ListAsyncTranscodesResponse; }) {
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
        { reply?.op?.map(op => (
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
