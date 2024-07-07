import {
  ListAsyncTranscodesResponse,
  TranscodeState,
  ListAsyncTranscodesResponse_Op_Type,
} from '@buf/krelinga_proto.bufbuild_es/krelinga/video/tcserver/v1/tcserver_pb'
import { EnumType, proto3 } from '@bufbuild/protobuf'

// TODO: it would be better to use a concrete type for [type], but it's too hard
// to figure out how to import the right symbol for now.
function enumName(type: any, value: number): string {
  const t = proto3.getEnumType(type)
  var name = t?.findNumber(value)?.localName
  if (!name) {
    name = '???'
  }
  return name
}

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
