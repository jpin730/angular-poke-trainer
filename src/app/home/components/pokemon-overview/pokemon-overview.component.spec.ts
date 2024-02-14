import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { MAX_STATS_MOCK } from 'testing/mocks/max-stats.mock'
import { POKEMONS_MOCK } from 'testing/mocks/pokemons.mock'
import { PokemonOverviewComponent } from './pokemon-overview.component'

class MockedPokeTrainerService {
  maxStats = MAX_STATS_MOCK
}

describe('PokemonOverviewComponent', () => {
  let component: PokemonOverviewComponent
  let fixture: ComponentFixture<PokemonOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonOverviewComponent],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonOverviewComponent)
    component = fixture.componentInstance
    component.pokemon = { ...POKEMONS_MOCK.at(0) } as Pokemon
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
