import { Component, Input } from '@angular/core'
import { Pokemon } from '@core/interfaces/pokemon.interface'

@Component({
  selector: 'app-pokemon-overview',
  standalone: true,
  templateUrl: './pokemon-overview.component.html',
  styleUrl: './pokemon-overview.component.scss',
})
export class PokemonOverviewComponent {
  @Input() pokemon!: Pokemon
}
