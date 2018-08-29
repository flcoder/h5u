import { toArray } from './array.js'

export function mkns( ns ) {

  const hs = Object.create( null )

  ns = ns || Object.create( null )
  ns.handlers = hs

  ns.on = ( ev, h ) => {
    const list = hs[ ev ] || ( hs[ ev ] = [] )
    list.push( h )
  }

  ns.fire = function() {
    const args = toArray( arguments )
    const ev = args.shift()
    const list = hs[ ev ] || []
    const end = list.length
    let h, i = 0
    for( ; i < end; ++i ) {
      h = list[ i ]
      h.apply( h, args )
    }
  }

  return ns

}
