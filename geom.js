import { sqrt, min } from './math.js'

export
function dist( p1, p2 ) {

  const dx = p2.x - p1.x
  const dy = p2.y - p1.y

  return sqrt( dx * dx + dy * dy )

}

export
function distwx( p1, p2, width ) {

  const dx = p2.x - p1.x
  const dy = p2.y - p1.y
  const dys = dy * dy

  let dx2

  if( p2.x < p1.x ) {
    dx2 = p2.x + width - p1.x
  } else {
    dx2 = p1.x + width - p2.x
  }

  return min( sqrt( dx * dx + dys ), sqrt( dx2 * dx2 + dys ) )

}

export
function midpoint( p1, p2 ) {

  const p = Object.create( null )

  p.x = p1.x + ( p2.x - p1.x ) * 0.5
  p.y = p1.y + ( p2.y - p1.y ) * 0.5

  return p

}
