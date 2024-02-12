import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { AvatarUploaderComponent } from './avatar-uploader.component'

class MockedPokeTrainerService {}

describe('AvatarUploaderComponent', () => {
  let component: AvatarUploaderComponent
  let fixture: ComponentFixture<AvatarUploaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarUploaderComponent],
      providers: [
        { provide: PokeTrainerService, useClass: MockedPokeTrainerService },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AvatarUploaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
