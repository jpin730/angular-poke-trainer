import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { RouterTestingModule } from '@angular/router/testing'

import { MaterialModule } from '@app-material/material.module'
import { ProfilePageComponent } from './profile-page.component'

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent
  let fixture: ComponentFixture<ProfilePageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, ProfilePageComponent, RouterTestingModule],
      providers: [provideAnimationsAsync()],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfilePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
