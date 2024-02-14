import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
import { MatChipInputEvent } from '@angular/material/chips'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { Router } from '@angular/router'
import { DateTime } from 'luxon'

import { PATH } from '@core/constants/path.constant'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { filter } from 'rxjs'
import { ProfileFormComponent } from './profile-form.component'

describe('ProfileFormComponent', () => {
  let component: ProfileFormComponent
  let fixture: ComponentFixture<ProfileFormComponent>
  let pokeTrainerServiceMock: Partial<PokeTrainerService>

  const routerSpy = jasmine.createSpyObj('Router', ['navigate'])
  const snackBarServiceSpy = jasmine.createSpyObj('SnackBarService', ['open'])

  beforeEach(async () => {
    pokeTrainerServiceMock = {
      avatar: 'avatar',
      profile: null,
    }

    await TestBed.configureTestingModule({
      imports: [ProfileFormComponent],
      providers: [
        provideAnimationsAsync(),
        { provide: PokeTrainerService, useValue: pokeTrainerServiceMock },
        { provide: Router, useValue: routerSpy },
        { provide: SnackBarService, useValue: snackBarServiceSpy },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfileFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should save profile', () => {
    const birthday = '1995-01-01'
    const hobby = 'Jugar Fútbol'

    const profile = {
      name: 'Ash Ketchum',
      hobby: [hobby],
      birthday: DateTime.fromISO(birthday),
      document: '1234567890',
    }

    expect(pokeTrainerServiceMock.profile).toBeNull()

    component.profileForm.patchValue(profile)

    expect(component.profileForm.valid).toBeTrue()

    component.submitProfile()

    expect(pokeTrainerServiceMock.profile).not.toBeNull()
    expect(pokeTrainerServiceMock.profile).toEqual({
      ...profile,
      hobby,
      birthday,
    })

    expect(routerSpy.navigate).toHaveBeenCalledWith([PATH.POKEMONS])
  })

  it('should not save profile without avatar', () => {
    const profile = {
      name: 'Ash Ketchum',
      hobby: [],
      birthday: DateTime.fromISO('1995-01-01'),
      document: '1234567890',
    }

    pokeTrainerServiceMock.avatar = null

    expect(pokeTrainerServiceMock.profile).toBeNull()

    component.profileForm.patchValue(profile)

    expect(component.profileForm.valid).toBeTrue()

    component.submitProfile()

    expect(pokeTrainerServiceMock.profile).toBeNull()
    expect(snackBarServiceSpy.open).toHaveBeenCalledWith(
      'Por favor, adjunte una foto de perfil.',
    )
  })

  it('should not save profile with invalid form', () => {
    const profile = {
      name: 'Ash Ketchum',
      hobby: [],
      birthday: DateTime.fromISO('1995-01-01'),
      document: '1234567890',
    }

    expect(pokeTrainerServiceMock.profile).toBeNull()

    component.profileForm.patchValue({
      ...profile,
      name: '',
      document: '',
      birthday: '',
    })
    expect(component.profileForm.valid).toBeFalse()
    component.submitProfile()
    expect(pokeTrainerServiceMock.profile).toBeNull()

    component.profileForm.patchValue({ ...profile, document: '', birthday: '' })
    expect(component.profileForm.valid).toBeFalse()
    component.submitProfile()
    expect(pokeTrainerServiceMock.profile).toBeNull()

    component.profileForm.patchValue({ ...profile, birthday: '' })
    expect(component.profileForm.valid).toBeFalse()
    component.submitProfile()
    expect(pokeTrainerServiceMock.profile).toBeNull()

    component.profileForm.patchValue({ ...profile })
    expect(component.profileForm.valid).toBeTrue()
    component.submitProfile()
    expect(pokeTrainerServiceMock.profile).not.toBeNull()
  })

  it('should add and remove hobby', () => {
    const event = {
      value: 'Jugar Fútbol',
      chipInput: { clear: jasmine.createSpy() },
    } as unknown as MatChipInputEvent

    component.addHobby(event)

    expect(component.hobbyControl.value).toEqual(['Jugar Fútbol'])
    expect(event.chipInput.clear).toHaveBeenCalled()

    component.removeHobby()

    expect(component.hobbyControl.value).toEqual([])
    expect(component.hobbyInputControl.value).toEqual('')
  })

  it('should select hobby', () => {
    const event = {
      option: { viewValue: 'Jugar Fútbol', deselect: jasmine.createSpy() },
    } as unknown as MatAutocompleteSelectedEvent

    component.selectedHobby(event)

    expect(component.hobbyControl.value).toEqual(['Jugar Fútbol'])
    expect(event.option.deselect).toHaveBeenCalledTimes(1)
  })

  it('should filter hobby', () => {
    const filterValue = 'tenis'

    component.filteredHobbies$
      .pipe(filter((result) => result.length === 1))
      .subscribe((result) => {
        expect(result).toEqual(
          component.hobbyList.filter((hobby) =>
            hobby.toLowerCase().includes(filterValue),
          ),
        )
      })

    component.hobbyInputControl.setValue(filterValue)
  })
})
