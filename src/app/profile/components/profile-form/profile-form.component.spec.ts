import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

import { ProfileFormComponent } from './profile-form.component'

describe('ProfileFormComponent', () => {
  let component: ProfileFormComponent
  let fixture: ComponentFixture<ProfileFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfileFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
