export function omap( obj, cb ) {
  Object.keys( obj ).map( ( key ) => cb( key, obj[ key ] ) )
}

export function callmap( obj, func ) {
  omap( obj, ( k, o ) => o[ func ]() )
}
