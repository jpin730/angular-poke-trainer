import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { HomePageComponent } from './home-page.component'

class MockedPokeTrainerService {}

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
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
