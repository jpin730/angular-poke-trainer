import { TestBed } from '@angular/core/testing'
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router'

import { PATH } from '@core/constants/path.constant'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { TRAINER_MOCK } from 'testing/mocks/trainer.mock'
import { pokemonsGuard } from './pokemons.guard'

describe('pokemonsGuard', () => {
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
      pokemonsGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    )
  }

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should return true when trainer is defined', () => {
    const result = executeGuard({
      trainer: TRAINER_MOCK,
    })

    expect(result).toBeTrue()
  })

  it('should redirect to profile when trainer is not defined', () => {
    executeGuard({
      trainer: null,
    })

    expect(routerSpy.parseUrl).toHaveBeenCalledWith(`/${PATH.PROFILE}`)
  })
})
