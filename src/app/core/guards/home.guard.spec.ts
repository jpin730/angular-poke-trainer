import { TestBed } from '@angular/core/testing'
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router'

import { PATH } from '@core/constants/path.constant'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { POKEMONS_MOCK } from 'testing/mocks/pokemons.mock'
import { TRAINER_MOCK } from 'testing/mocks/trainer.mock'
import { homeGuard } from './home.guard'

describe('homeGuard', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['parseUrl'])

  const executeGuard = (
    pokeTrainerServiceMock: Partial<PokeTrainerService>,
  ) => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PokeTrainerService,
          useValue: pokeTrainerServiceMock,
        },
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    })

    return TestBed.runInInjectionContext(() =>
      homeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    )
  }

  it('should return true when trainer and pokemons are defined', () => {
    const pokeTrainerServiceMock: Partial<PokeTrainerService> = {
      trainer: TRAINER_MOCK,
      pokemons: POKEMONS_MOCK,
    }

    const result = executeGuard(pokeTrainerServiceMock)

    expect(result).toBeTrue()
  })

  it('should redirect to profile when trainer is not defined', () => {
    executeGuard({
      trainer: null,
      pokemons: POKEMONS_MOCK,
    })

    expect(routerSpy.parseUrl).toHaveBeenCalledWith(`/${PATH.PROFILE}`)
  })

  it('should redirect to pokemons when pokemons are not defined', () => {
    executeGuard({
      trainer: TRAINER_MOCK,
      pokemons: null,
    })

    expect(routerSpy.parseUrl).toHaveBeenCalledWith(`/${PATH.POKEMONS}`)
  })
})
