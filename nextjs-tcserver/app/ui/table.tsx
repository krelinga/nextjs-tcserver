import {
  ListAsyncTranscodesResponse,
  TranscodeState,
  ListAsyncTranscodesResponse_Op_Type,
} from '@buf/krelinga_proto.bufbuild_es/krelinga/video/tcserver/v1/tcserver_pb';
import { enumName } from '@/app/lib/enums'

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
            <td>{enumName(ListAsyncTranscodesResponse_Op_Type, op.type)}</td>
            <td>{enumName(TranscodeState, op.state)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
