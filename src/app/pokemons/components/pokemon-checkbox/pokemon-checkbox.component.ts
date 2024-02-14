import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

import { MaterialModule } from '@app-material/material.module'
import { Pokemon } from '@core/interfaces/pokemon.interface'

@Component({
  selector: 'app-pokemon-checkbox',
  standalone: true,
  imports: [CommonModule, MaterialModule, NgOptimizedImage],
  templateUrl: './pokemon-checkbox.component.html',
  styleUrl: './pokemon-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCheckboxComponent {
  @Input({ required: true }) pokemon!: Pokemon
  @Input() disabled = false
  @Input() checked = false

  @Output() changeChecked = new EventEmitter<Event>()
}
