import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { MaterialModule } from '@app-material/material.module'
import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokemonStatsComponent } from '../pokemon-stats/pokemon-stats.component'

@Component({
  selector: 'app-pokemon-overview',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    NgOptimizedImage,
    PokemonStatsComponent,
  ],
  templateUrl: './pokemon-overview.component.html',
  styleUrl: './pokemon-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonOverviewComponent {
  @Input() pokemon!: Pokemon
}
