import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Pokemon } from '@core/interfaces/pokemon.interface'

@Component({
  selector: 'app-pokemon-checkbox',
  standalone: true,
  templateUrl: './pokemon-checkbox.component.html',
  styleUrl: './pokemon-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCheckboxComponent {
  @Input() pokemon!: Pokemon
}
