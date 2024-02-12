import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'

import { MaterialModule } from '@app-material/material.module'
import { PATH } from '@core/constants/path.constant'
import { Pokemon } from '@core/interfaces/pokemon.interface'
import { Trainer } from '@core/interfaces/trainer.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { ProfileComponent } from '@shared/components/profile/profile.component'
import { TrainerCardComponent } from '@shared/components/trainer-card/trainer-card.component'
import { FirstWordPipe } from '@shared/pipes/first-word.pipe'
import { PokemonOverviewComponent } from '../pokemon-overview/pokemon-overview.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FirstWordPipe,
    MaterialModule,
    PokemonOverviewComponent,
    ProfileComponent,
    RouterLink,
    TrainerCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly pokeTrainerService = inject(PokeTrainerService)

  PATH = PATH

  pokemons = this.pokeTrainerService.pokemons as Pokemon[]
  trainer = this.pokeTrainerService.trainer as Trainer
}
