import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MaterialModule } from '@app-material/material.module'

import { PATH } from '@core/constants/path.constant'
import { Trainer } from '@core/interfaces/trainer.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { FirstWordPipe } from '@shared/pipes/first-word.pipe'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, MaterialModule, FirstWordPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly pokeTrainerService = inject(PokeTrainerService)

  PATH = PATH

  trainer: Trainer | null = null

  get currentUrl() {
    this.trainer = this.pokeTrainerService.trainer
    return location.pathname
  }
}
