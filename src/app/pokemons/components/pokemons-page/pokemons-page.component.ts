import { Location } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { MaterialModule } from '@app-material/material.module'
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
  ],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsPageComponent {
  private readonly location = inject(Location)

  back() {
    this.location.back()
  }
}
