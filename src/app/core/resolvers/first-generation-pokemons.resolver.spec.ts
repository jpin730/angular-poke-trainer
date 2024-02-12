import { TestBed } from '@angular/core/testing'
import { ResolveFn } from '@angular/router'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { firstGenerationPokemonsResolver } from './first-generation-pokemons.resolver'

class MockedPokeTrainerService {
  getFirstGenerationPokemons() {
    return []
  }
}

describe('firstGenerationPokemonsResolver', () => {
  const executeResolver: ResolveFn<Pokemon[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      firstGenerationPokemonsResolver(...resolverParameters),
    )

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    })
  })

  it('should be created', () => {
    expect(executeResolver).toBeTruthy()
  })
})
