import { Injectable } from '@angular/core'

import { Profile } from '@core/interfaces/profile.interface'

@Injectable({
  providedIn: 'root',
})
export class PokeTrainerService {
  private _profile?: Profile
  private _avatar?: string

  set profile(profile: Profile | undefined) {
    this._profile = profile
  }

  get profile() {
    return this._profile
  }

  set avatar(avatar: string | undefined) {
    this._avatar = avatar
  }

  get avatar() {
    return this._avatar
  }
}