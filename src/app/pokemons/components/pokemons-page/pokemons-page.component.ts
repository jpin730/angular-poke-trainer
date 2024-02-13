import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'

import { MaterialModule } from '@app-material/material.module'
import { PATH } from '@core/constants/path.constant'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { ProfileComponent } from '@shared/components/profile/profile.component'
import { TrainerCardComponent } from '@shared/components/trainer-card/trainer-card.component'
import { PokemonSelectorComponent } from '../pokemon-selector/pokemon-selector.component'

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [
    MaterialModule,
    PokemonSelectorComponent,
    ProfileComponent,
    TrainerCardComponent,
    RouterLink,
  ],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsPageComponent {
  private readonly poekeTrainerService = inject(PokeTrainerService)

  PATH = PATH

  backTo = this.poekeTrainerService.pokemonIds ? PATH.HOME : PATH.PROFILE
}
