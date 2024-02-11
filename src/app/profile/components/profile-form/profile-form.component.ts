import { ENTER } from '@angular/cdk/keycodes'
import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
import { MatChipInputEvent } from '@angular/material/chips'
import { Router } from '@angular/router'
import { DateTime } from 'luxon'
import { Observable, distinctUntilChanged, map, startWith, tap } from 'rxjs'

import { MaterialModule } from '@app-material/material.module'
import { PATH } from '@core/constants/path.constant'
import { getAge } from '@core/helpers/get-age.helper'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { TrimOnBlurDirective } from '@shared/directives/trim-on-blur.directive'
import { SnackBarService } from '@shared/services/snack-bar.service'

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    TrimOnBlurDirective,
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss',
})
export class ProfileFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder).nonNullable
  private readonly pokeTrainerService = inject(PokeTrainerService)
  private readonly snackBarService = inject(SnackBarService)
  private readonly router = inject(Router)

  profileForm = this.fb.group({
    name: ['', [Validators.required]],
    hobby: this.fb.control<string[]>([], []),
    birthday: this.fb.control<DateTime | ''>('', [Validators.required]),
    document: ['', []],
  })
  hobbyInputControl = this.fb.control<string>('')
  separatorKeysCodes: number[] = [ENTER]
  today = DateTime.now()
  filteredHobbies$!: Observable<string[]>
  isAdult$!: Observable<boolean>
  hobbyList: string[] = [
    'Play Soccer',
    'Play Basketball',
    'Play Tennis',
    'Play Volleyball',
    'Play Video Games',
  ]

  get hobbyControl() {
    return this.profileForm.controls.hobby
  }

  get birthdayControl() {
    return this.profileForm.controls.birthday
  }

  get documentControl() {
    return this.profileForm.controls.document
  }

  ngOnInit(): void {
    this.filteredHobbies$ = this.hobbyInputControl.valueChanges.pipe(
      startWith(null),
      map((hobby: string | null) =>
        hobby ? this._filter(hobby) : this.hobbyList.slice(),
      ),
    )

    this.isAdult$ = this.birthdayControl.valueChanges.pipe(
      map((birthday) => birthday !== '' && getAge(birthday) >= 18),
      distinctUntilChanged(),
      tap((isAdult) =>
        isAdult
          ? this.documentControl.addValidators(Validators.required)
          : this.documentControl.removeValidators(Validators.required),
      ),
      tap(() => this.documentControl.updateValueAndValidity()),
    )
  }

  submitProfile() {
    if (this.profileForm.invalid) return

    if (!this.pokeTrainerService.avatar) {
      this.snackBarService.open('Por favor, adjunte una foto de perfil.')
      return
    }

    const formValue = this.profileForm.getRawValue()

    const birthday =
      formValue.birthday && formValue.birthday.toFormat('yyyy-MM-dd')
    const hobby = formValue.hobby.at(0) || ''

    const profile = {
      ...formValue,
      birthday,
      hobby,
    }

    this.pokeTrainerService.profile = profile

    this.router.navigate([PATH.POKEMONS])
  }

  addHobby(event: MatChipInputEvent): void {
    const value = (event.value || '').trim()

    if (value) this.hobbyControl.setValue([value])

    event.chipInput.clear()
  }

  removeHobby() {
    this.hobbyControl.setValue([])
    this.hobbyInputControl.setValue('')
  }

  selectedHobby(event: MatAutocompleteSelectedEvent): void {
    this.hobbyControl.setValue([event.option.viewValue])
    this.hobbyInputControl.setValue('')
    event.option.deselect()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.hobbyList.filter((hobby) =>
      hobby.toLowerCase().includes(filterValue),
    )
  }
}
