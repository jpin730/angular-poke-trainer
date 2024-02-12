import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { trainerMock } from 'testing/mocks/moked-trainer.mock'
import { HomePageComponent } from './home-page.component'

class MockedPokeTrainerService {
  trainer = { ...trainerMock }
}

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent, RouterTestingModule],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
