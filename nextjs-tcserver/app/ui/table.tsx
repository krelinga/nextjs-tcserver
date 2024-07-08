import {
  ListAsyncTranscodesResponse,
  TranscodeState,
  ListAsyncTranscodesResponse_Op,
  ListAsyncTranscodesResponse_Op_Type,

} from '@buf/krelinga_proto.bufbuild_es/krelinga/video/tcserver/v1/tcserver_pb';
import { enumName } from '@/app/lib/enums'
import Link from 'next/link';

function makeHref(op: ListAsyncTranscodesResponse_Op): string {
  var prefix = '';
  if (op.type === ListAsyncTranscodesResponse_Op_Type.SINGLE_FILE) {
    prefix = 'single_file';
  } else if (op.type === ListAsyncTranscodesResponse_Op_Type.SHOW) {
    prefix = 'show';
  } else if (op.type === ListAsyncTranscodesResponse_Op_Type.SPREAD) {
    prefix = 'spread'
  } else {
    throw new Error(`unhandled op type ${op.type}`);
  }
  return `/${prefix}/${op.name}`
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
            <td>
              <Link href={makeHref(op)}>
                {op.name}
              </Link>
            </td>
            <td>{enumName(ListAsyncTranscodesResponse_Op_Type, op.type)}</td>
            <td>{enumName(TranscodeState, op.state)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
