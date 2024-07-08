import { EnumType, proto3 } from '@bufbuild/protobuf'

// TODO: it would be better to use a concrete type for [type], but it's too hard
// to figure out how to import the right symbol for now.
export function enumName(type: any, value: number): string {
  const t = proto3.getEnumType(type)
  var name = t?.findNumber(value)?.localName
  if (!name) {
    name = '???'
  }
  return name
}
