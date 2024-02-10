import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ProfilePageComponent } from './profile-page.component'

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent
  let fixture: ComponentFixture<ProfilePageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePageComponent, RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfilePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
