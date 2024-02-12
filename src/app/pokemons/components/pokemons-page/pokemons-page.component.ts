import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'

import { MaterialModule } from '@app-material/material.module'
import { PATH } from '@core/constants/path.constant'
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
  PATH = PATH
}
