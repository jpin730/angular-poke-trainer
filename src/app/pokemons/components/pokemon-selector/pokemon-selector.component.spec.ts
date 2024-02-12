import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RouterTestingModule } from '@angular/router/testing'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { PokemonSelectorComponent } from './pokemon-selector.component'

class MockedPokeTrainerService {}

describe('PokemonSelectorComponent', () => {
  let component: PokemonSelectorComponent
  let fixture: ComponentFixture<PokemonSelectorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSelectorComponent, RouterTestingModule],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonSelectorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
