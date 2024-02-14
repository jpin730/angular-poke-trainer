import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { MaterialModule } from '@app-material/material.module'
import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokemonTypeToSpanishPipe } from '@shared/pipes/pokemon-type-to-spanish.pipe'
import { PokemonStatsComponent } from '../pokemon-stats/pokemon-stats.component'

@Component({
  selector: 'app-pokemon-overview',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    NgOptimizedImage,
    PokemonStatsComponent,
    PokemonTypeToSpanishPipe,
  ],
  templateUrl: './pokemon-overview.component.html',
  styleUrl: './pokemon-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonOverviewComponent {
  @Input({ required: true }) pokemon!: Pokemon
}
