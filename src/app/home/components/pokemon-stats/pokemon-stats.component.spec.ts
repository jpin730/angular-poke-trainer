import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { pokemonsMock } from 'testing/mocks/pokemons.mock'
import { PokemonStatsComponent } from './pokemon-stats.component'

describe('PokemonStatsComponent', () => {
  let component: PokemonStatsComponent
  let fixture: ComponentFixture<PokemonStatsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStatsComponent],
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
