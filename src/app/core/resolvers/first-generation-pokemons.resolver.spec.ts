import { TestBed } from '@angular/core/testing'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { isObservable, of } from 'rxjs'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { POKEMONS_MOCK } from 'testing/mocks/pokemons.mock'
import { firstGenerationPokemonsResolver } from './first-generation-pokemons.resolver'

describe('firstGenerationPokemonsResolver', () => {
  const executeResolver = (
    pokeTrainerServiceMock: Partial<PokeTrainerService>,
  ) => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PokeTrainerService, useValue: pokeTrainerServiceMock },
      ],
    })
    return TestBed.runInInjectionContext(() =>
      firstGenerationPokemonsResolver(
        {} as ActivatedRouteSnapshot,
        {} as RouterStateSnapshot,
      ),
    )
  }

  it('should return first generation pokemons', () => {
    const result = executeResolver({
      getFirstGenerationPokemons: () => of(POKEMONS_MOCK),
    })

    expect(isObservable(result)).toBeTrue()

    if (isObservable(result)) {
      result.subscribe((pokemons) => {
        expect(pokemons).toEqual(POKEMONS_MOCK)
      })
    }
  })
})
