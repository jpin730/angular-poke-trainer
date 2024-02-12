import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { ProfileFormComponent } from './profile-form.component'

class MockedPokeTrainerService {}

describe('ProfileFormComponent', () => {
  let component: ProfileFormComponent
  let fixture: ComponentFixture<ProfileFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormComponent],
      providers: [
        provideAnimationsAsync(),
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfileFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
