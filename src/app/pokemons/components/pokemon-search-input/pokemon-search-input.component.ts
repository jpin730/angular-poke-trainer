import { Component, EventEmitter, Output } from '@angular/core'

import { MaterialModule } from '@app-material/material.module'

@Component({
  selector: 'app-pokemon-search-input',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pokemon-search-input.component.html',
  styleUrl: './pokemon-search-input.component.scss',
})
export class PokemonSearchInputComponent {
  @Output() inputChange = new EventEmitter<string>()

  searchText = ''

  onInput(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    const trimmed = value.trim()

    target.value = trimmed
    this.searchText = trimmed
    this.inputChange.emit(trimmed)
  }
}
