import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { trainerMock } from 'testing/mocks/moked-trainer.mock'
import { PokemonsPageComponent } from './pokemons-page.component'

class MockedPokeTrainerService {
  trainer = trainerMock
}

describe('PokemonsPageComponent', () => {
  let component: PokemonsPageComponent
  let fixture: ComponentFixture<PokemonsPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonsPageComponent, RouterTestingModule],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
