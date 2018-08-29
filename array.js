const splice = Array.prototype.splice
export function toArray( arg ) {
  return splice.call( arg, 0 )
}
