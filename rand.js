import { floor } from './math.js'

export const rand = Math.random

export function randInt( min, max ) {

  if( 'undefined' === typeof max ) {
    max = min
    min = 0
  }

  return min + floor( rand() * ( max - min + 1 ) )

}
