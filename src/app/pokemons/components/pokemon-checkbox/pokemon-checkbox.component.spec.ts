import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokemonCheckboxComponent } from './pokemon-checkbox.component'

const mockedPokemon: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  sprite: 'https://example.com/bulbasaur.png',
  type: 'grass',
  hp: 45,
  attack: 49,
  defense: 49,
  specialAttack: 65,
  specialDefense: 65,
  speed: 45,
}

describe('PokemonCheckboxComponent', () => {
  let component: PokemonCheckboxComponent
  let fixture: ComponentFixture<PokemonCheckboxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCheckboxComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonCheckboxComponent)
    component = fixture.componentInstance
    component.pokemon = mockedPokemon
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
