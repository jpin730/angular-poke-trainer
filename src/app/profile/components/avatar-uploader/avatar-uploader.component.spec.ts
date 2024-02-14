import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { AvatarUploaderComponent } from './avatar-uploader.component'

describe('AvatarUploaderComponent', () => {
  let component: AvatarUploaderComponent
  let fixture: ComponentFixture<AvatarUploaderComponent>
  const pokeTrainerServiceMock: Partial<PokeTrainerService> = {
    avatar: null,
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarUploaderComponent],
      providers: [
        { provide: PokeTrainerService, useValue: pokeTrainerServiceMock },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AvatarUploaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should save avatar and clear avatar', () => {
    const fileName = 'avatar.png'
    const event = {
      target: {
        files: {
          item: () => new File([''], fileName, { type: 'image/png' }),
        },
      },
    }

    expect(pokeTrainerServiceMock.avatar).toBeNull()

    component.saveAvatar(event as unknown as Event)

    expect(pokeTrainerServiceMock.avatar).not.toBeNull()
    expect(pokeTrainerServiceMock.avatar).toBe(component.avatarUrl)
    expect(component.fileName).toBe(fileName)

    component.clearAvatar()

    expect(pokeTrainerServiceMock.avatar).toBeNull()
    expect(component.avatarUrl).toBe('')
    expect(component.fileName).toBe('')
  })
})
