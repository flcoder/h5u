import { rand } from './rand.js'

export default function randColor() {
  chroma.hsl( rand() * 360, 1, 1)
}
