import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { map, take, tap } from 'rxjs'

import { MaterialModule } from '@app-material/material.module'
import { MAX_POKEMON_SELECTION } from '@core/constants/max-pokemon-selection.constant'
import { PATH } from '@core/constants/path.constant'
import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { PokemonCheckboxComponent } from '../pokemon-checkbox/pokemon-checkbox.component'
import { PokemonSearchInputComponent } from '../pokemon-search-input/pokemon-search-input.component'

@Component({
  selector: 'app-pokemon-selector',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PokemonCheckboxComponent,
    PokemonSearchInputComponent,
  ],
  templateUrl: './pokemon-selector.component.html',
  styleUrl: './pokemon-selector.component.scss',
})
export class PokemonSelectorComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)
  private readonly router = inject(Router)
  private readonly pokeTrainerService = inject(PokeTrainerService)

  pokemons: Pokemon[] = []
  filteredPokemons: Pokemon[] = []
  selectedPokemons: number[] = []
  disabledCheckboxes = false

  ngOnInit() {
    this.route.data
      .pipe(
        take(1),
        map((data) => data['pokemons'] ?? []),
        tap((pokemons) => {
          this.pokemons = pokemons
          this.filteredPokemons = pokemons
        }),
      )
      .subscribe()

    if (this.pokeTrainerService.pokemonIds) {
      this.selectedPokemons = this.pokeTrainerService.pokemonIds
      this.disabledCheckboxes = true
    }
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

  filterPokemons(value: string) {
    const filterValue = value.toLowerCase()

    if (!filterValue) {
      this.filteredPokemons = this.pokemons
      return
    }

    this.filteredPokemons = this.pokemons.filter((pokemon) =>
      isNaN(+filterValue)
        ? pokemon.name.toLowerCase().includes(filterValue)
        : pokemon.id === +filterValue,
    )
  }

  savePokemons() {
    if (this.selectedPokemons.length !== MAX_POKEMON_SELECTION) return

    this.pokeTrainerService.pokemonIds = [...this.selectedPokemons]

    this.router.navigate([PATH.HOME])
  }
}
