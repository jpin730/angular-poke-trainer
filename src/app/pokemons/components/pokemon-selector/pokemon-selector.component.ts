import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'

import { MAX_POKEMON_SELECTION } from '@core/constants/max-pokemon-selection.constant'
import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokemonCheckboxComponent } from '../pokemon-checkbox/pokemon-checkbox.component'
import { PokemonSearchInputComponent } from '../pokemon-search-input/pokemon-search-input.component'

@Component({
  selector: 'app-pokemon-selector',
  standalone: true,
  imports: [
    CommonModule,
    PokemonCheckboxComponent,
    PokemonSearchInputComponent,
  ],
  templateUrl: './pokemon-selector.component.html',
  styleUrl: './pokemon-selector.component.scss',
})
export class PokemonSelectorComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)

  pokemons$!: Observable<Pokemon[]>
  selectedPokemons: number[] = []
  disabledCheckboxes = false

  ngOnInit() {
    this.pokemons$ = this.route.data.pipe(map((data) => data['pokemons'] ?? []))
  }

  onChangePokemonSelection(event: Event) {
    const { checked, value } = event.target as HTMLInputElement

    if (checked) {
      this.selectedPokemons.push(+value)
    } else {
      const index = this.selectedPokemons.findIndex((id) => id === +value)
      this.selectedPokemons.splice(index, 1)
    }

    this.disabledCheckboxes =
      this.selectedPokemons.length === MAX_POKEMON_SELECTION
  }
}
