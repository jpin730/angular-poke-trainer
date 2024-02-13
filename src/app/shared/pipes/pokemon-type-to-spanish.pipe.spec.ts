import { PokemonTypeToSpanishPipe } from './pokemon-type-to-spanish.pipe'

describe('PokemonTypeToSpanishPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypeToSpanishPipe()
    expect(pipe).toBeTruthy()
  })
})
