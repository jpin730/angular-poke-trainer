import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask'

import { MaterialModule } from '@app-material/material.module'
import { DOCUMENT_MASK } from '@core/constants/document-mask.constant'
import { getAge } from '@core/helpers/get-age.helper'
import { Trainer } from '@core/interfaces/trainer.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { AvatarComponent } from '../avatar/avatar.component'

const mockedTrainer: Trainer = {
  name: 'José Sosa',
  hobby: 'Ver series',
  birthday: '1995-01-01',
  document: '056432159',
  avatar:
    'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AvatarComponent, MaterialModule, CommonModule, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private readonly pokeTrainerService = inject(PokeTrainerService)

  DOCUMENT_MASK = DOCUMENT_MASK

  trainer = this.pokeTrainerService.trainer ?? mockedTrainer
  age = getAge(this.trainer.birthday)
  isAdult = this.age >= 18
}
