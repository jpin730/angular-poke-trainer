import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { pokemonsMock } from 'testing/mocks/pokemons.mock'
import { PokemonOverviewComponent } from './pokemon-overview.component'

describe('PokemonOverviewComponent', () => {
  let component: PokemonOverviewComponent
  let fixture: ComponentFixture<PokemonOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonOverviewComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonOverviewComponent)
    component = fixture.componentInstance
    component.pokemon = { ...pokemonsMock.at(0) } as Pokemon
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
