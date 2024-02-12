import { Injectable } from '@angular/core'

import { Profile } from '@core/interfaces/profile.interface'
import { Trainer } from '@core/interfaces/trainer.interface'

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

  get trainer(): Trainer | null {
    return this._avatar && this._profile
      ? { ...this._profile, avatar: this._avatar }
      : null
  }
}
