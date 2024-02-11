import { TestBed } from '@angular/core/testing'

import { PokeTrainerService } from './poke-trainer.service'

describe('PokeTrainerService', () => {
  let service: PokeTrainerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PokeTrainerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
