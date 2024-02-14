import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute, Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'

import { PATH } from '@core/constants/path.constant'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { POKEMONS_ID_MOCK, POKEMONS_MOCK } from 'testing/mocks/pokemons.mock'
import { PokemonSelectorComponent } from './pokemon-selector.component'

class PokeTrainerServiceMock {
  private _pokemonIds = [...POKEMONS_ID_MOCK]

  get pokemonIds() {
    return [...this._pokemonIds]
  }

  set pokemonIds(ids: number[]) {
    this._pokemonIds = [...ids].sort((a, b) => a - b)
  }
}

describe('PokemonSelectorComponent', () => {
  let component: PokemonSelectorComponent
  let fixture: ComponentFixture<PokemonSelectorComponent>
  let pokeTrainerServiceMock: PokeTrainerService
  const routerSpy = jasmine.createSpyObj('Router', ['navigate'])
  const routeMock: Partial<ActivatedRoute> = {
    data: of({ pokemons: POKEMONS_MOCK }),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSelectorComponent, RouterTestingModule],
      providers: [
        { provide: PokeTrainerService, useClass: PokeTrainerServiceMock },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: routeMock },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonSelectorComponent)
    component = fixture.componentInstance
    pokeTrainerServiceMock = TestBed.inject(PokeTrainerService)
    fixture.detectChanges()
  })

  it('should create with full pokemon selection', () => {
    expect(component).toBeTruthy()
    expect(component.pokemons).toEqual(POKEMONS_MOCK)
    expect(component.disabledCheckboxes).toBeTrue()
  })

  it('should change pokemon selection and save with max pokemon selection', () => {
    const [id, ...ids] = POKEMONS_ID_MOCK

    const event = {
      target: {
        checked: false,
        value: id,
      },
    } as unknown as Event

    component.onChangePokemonSelection(event)

    expect(component.selectedPokemons).toEqual(ids)
    expect(component.disabledCheckboxes).toBeFalse()

    component.savePokemons()

    expect(routerSpy.navigate).not.toHaveBeenCalled()
    expect(pokeTrainerServiceMock.pokemonIds).not.toEqual(ids)

    component.onChangePokemonSelection({
      ...event,
      target: { ...event.target, checked: true } as HTMLInputElement,
    })

    expect(component.selectedPokemons.sort((a, b) => a - b)).toEqual(
      POKEMONS_ID_MOCK,
    )
    expect(component.disabledCheckboxes).toBeTrue()

    component.savePokemons()

    expect(routerSpy.navigate).toHaveBeenCalledWith([PATH.HOME])
    expect(pokeTrainerServiceMock.pokemonIds).toEqual(POKEMONS_ID_MOCK)
  })

  it('should filter pokemons', () => {
    const [id] = POKEMONS_ID_MOCK

    component.filterPokemons('')

    expect(component.filteredPokemons).toEqual(POKEMONS_MOCK)

    component.filterPokemons(id.toString())

    expect(component.filteredPokemons).toEqual([POKEMONS_MOCK[0]])

    component.filterPokemons('bulbasaur')

    expect(component.filteredPokemons).toEqual([POKEMONS_MOCK[0]])

    component.filterPokemons('bulbasaur1')

    expect(component.filteredPokemons).toEqual([])
  })
})
