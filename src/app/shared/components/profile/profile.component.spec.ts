import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { TRAINER_MOCK } from 'testing/mocks/trainer.mock'
import { ProfileComponent } from './profile.component'

class MockedPokeTrainerService {
  trainer = TRAINER_MOCK
}

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
