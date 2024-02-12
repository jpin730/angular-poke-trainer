import { inject } from '@angular/core'
import { ResolveFn } from '@angular/router'

import { Pokemon } from '@core/interfaces/pokemon.interface'
import { PokeTrainerService } from '@core/services/poke-trainer.service'

export const firstGenerationPokemonsResolver: ResolveFn<Pokemon[]> = () =>
  inject(PokeTrainerService).getFirstGenerationPokemons()
