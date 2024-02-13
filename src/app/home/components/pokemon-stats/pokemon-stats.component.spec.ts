import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { maxStatsMock } from 'testing/mocks/max-stats.mock'
import { pokemonsMock } from 'testing/mocks/pokemons.mock'
import { PokemonStatsComponent } from './pokemon-stats.component'

class MockedPokeTrainerService {
  maxStats = maxStatsMock
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
    component.pokemon = { ...pokemonsMock.at(0) } as Pokemon
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
