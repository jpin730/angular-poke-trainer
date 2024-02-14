import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { MAX_STATS_MOCK } from 'testing/mocks/max-stats.mock'
import { POKEMONS_MOCK } from 'testing/mocks/pokemons.mock'
import { PokemonStatsComponent } from './pokemon-stats.component'

class MockedPokeTrainerService {
  maxStats = MAX_STATS_MOCK
}

describe('PokemonStatsComponent', () => {
  let component: PokemonStatsComponent
  let fixture: ComponentFixture<PokemonStatsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStatsComponent],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonStatsComponent)
    component = fixture.componentInstance
    component.pokemon = { ...POKEMONS_MOCK.at(0) } as Pokemon
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
