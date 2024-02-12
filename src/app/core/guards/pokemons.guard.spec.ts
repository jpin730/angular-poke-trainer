import { TestBed } from '@angular/core/testing'
import { CanActivateFn } from '@angular/router'

import { pokemonsGuard } from './pokemons.guard'

describe('pokemonsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => pokemonsGuard(...guardParameters))

  beforeEach(() => {
    TestBed.configureTestingModule({})
  })

  it('should be created', () => {
    expect(executeGuard).toBeTruthy()
  })
})
