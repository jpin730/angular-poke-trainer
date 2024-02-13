import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { Pokemon } from '@core/interfaces/pokemon.interface'

@Component({
  selector: 'app-pokemon-stats',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonStatsComponent {
  @Input() pokemon!: Pokemon
}
