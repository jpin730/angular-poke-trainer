import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core'
import { MaterialModule } from '@app-material/material.module'

import { Pokemon, PokemonStats } from '@core/interfaces/pokemon.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component'

@Component({
  selector: 'app-pokemon-stats',
  standalone: true,
  imports: [MaterialModule, ProgressBarComponent],
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonStatsComponent {
  private readonly pokeTrainService = inject(PokeTrainerService)

  @Input() pokemon!: Pokemon

  maxStats = this.pokeTrainService.maxStats as PokemonStats
}
