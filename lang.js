import core from './internal/core.js'

export function mkLang( map, code ) {

  const apslice = Array.prototype.slice

  let fallback = code,
    activeMap = map[ code ],
    fallbackMap = activeMap,
    l = Object.create( null ),
    key

  for( key in fallbackMap ) mkKey( key )

  return L

  function mkKey( key ) {
    Object.defineProperty( key, {
      get() {
        const val = activeMap[ key ]
      }
    })
  }

  function L( action ) {
    switch( action ) {
      case 'code':
        code = arguments[ 1 ]
        activeMap = map[ code ]
        break
    }
  }

  function L( key ) {
    const val = activeMap[ key ]
    if( 'undefined' === typeof val ) {
      val = fallbackMap[ key ]
    }
    switch( typeof val ) {
      case 'string':
        return( val )
      case 'function':
        const args = apslice.call( arguments, 1 )
        return val.apply( null, args )
      default:
        throw new Error( core.lang.E_TYPE_ERROR( key ) )
    }
  }

}
