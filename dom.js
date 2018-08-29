export const body = document.body

export function mkel( tag, pa ) {
  const el = document.createElement( tag )
  if( pa ) add( pa, el )
  return el
}

export
function add( pa, ch ) {
  pa.appendChild( ch )
  return ch
}

export
function mkbtn( id, pa, text, click ) {
  const el = mkel( 'button' )
  el.innerHTML = text || ''
  addcls( el, 'btn', 'btn-' + id )
  if( pa ) add( pa, el )
  if( click ) onclick( el, click )
  return el
}

export
function mkvbtn( id, pa, text, v ) {
  const el = mkbtn( id, pa, text, () => {
    activate( v )
    activate( el )
  })
  return el
}

export
function mkimg( id, pa, src ) {
  const el = mkel( 'img' )
  el.src = src
  addcls( el, 'img', 'img-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mkico( id, pa ) {
  const el = mkel( 'i' )
  addcls( el, 'icon', 'icon-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mkibtn( id, pa, click ) {
  const el = mkbtn( id, pa, null, click )
  mkico( id, el )
  return el
}

export
function mkdiv( id, pa, text ) {
  const el = mkel( 'div' )
  el.innerHTML = text || ''
  addcls( el, 'div', 'div-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mktable( id, pa, text ) {
  const el = mkel( 'table' )
  el.innerHTML = text || ''
  addcls( el, 'table', 'table-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mktr( id, pa, text ) {
  const el = mkel( 'tr' )
  el.innerHTML = text || ''
  addcls( el, 'tr', 'tr-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mktd( id, pa, text ) {
  const el = mkel( 'td' )
  el.innerHTML = text || ''
  addcls( el, 'td', 'td-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mkth( id, pa, text ) {
  const el = mkel( 'th' )
  el.innerHTML = text || ''
  addcls( el, 'th', 'th-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mklayer( id, pa ) {
  const el = mkel( 'div' )
  addcls( el, 'layer', 'layer-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mkvc( id, pa ) {
  const el = mkel( 'div' )
  addcls( el, 'vc', 'vc-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mkview( id, pa ) {
  const el = mkel( 'div' )
  addcls( el, 'view', 'view-' + id )
  if( pa ) add( pa, el )
  return el
}

export
function mkselect( id, pa, opts ) {
  const el = mkel( 'select' )
  addcls( el, 'select', 'select-' + id )
  if( pa ) add( pa, el )
  if( opts ) mkoptions( opts, el )
  return el
}

export
function mkinput( id, pa, ph ) {
  const el = mkel( 'input' )
  addcls( el, 'input', 'input-' + id )
  if( pa ) add( pa, el )
  if( ph ) el.placeholder = ph
  return el
}

export
function mkoption( id, pa, text ) {
  const el = mkel( 'option' )
  el.innerHTML = text || ''
  el.value = id
  if( pa ) add( pa, el )
  return el
}

export
function mkoptions( opts, pa ) {
  let k
  for( k in opts ) mkoption( k, pa, opts[ k ] )
}

export
function mkscreen( id, pa ) {
  const el = mkel( 'div', pa )
  addcls( el, 'screen', 'screen-' + id )
  return el
}

export
function onclick( ch, cb ) {
  onev( ch, 'click', cb )
}

export
function onchange( ch, cb ) {
  onev( ch, 'change', cb )
}

export
function onev( ch, ev, cb ) {
  ch.addEventListener( ev, cb )
}

export
function addcls( el ) {
  const len = arguments.length
  for( let i = 1; i < len; ++i ) el.classList.add( arguments[ i ] )
}

export
function remcls( el ) {
  const len = arguments.length
  for( let i = 1; i < len; ++i ) el.classList.remove( arguments[ i ] )
}

export
function show( el ) {
  addcls( el, 'shown' )
  remcls( el, 'hidden' )
}

export
function hide( el ) {
  remcls( el, 'shown' )
  addcls( el, 'hidden' )
}

export
function deactivate( el ) {
  const pa = el.parentElement
  if( pa ) pa.activeItem = null
  remcls( el, 'active' )
  el.dispatchEvent( new Event( 'h5u-deactivated', el ) )
}

export
function activate( el ) {
  const pa = el.parentElement
  if( pa ) {
    if( pa.activeItem ) deactivate( pa.activeItem )
    pa.activeItem = el
  }
  addcls( el, 'active' )
  el.dispatchEvent( new Event( 'h5u-activated', el ) )
}

export
function onactivated( el, cb ) {
  onev( el, 'h5u-activated', cb )
}
