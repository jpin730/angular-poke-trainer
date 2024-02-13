import { Pipe, PipeTransform } from '@angular/core'

import { POKEMON_TYPE_SPANISH } from '@core/constants/pokemon-type.constant'

@Pipe({
  name: 'pokemonTypeToSpanish',
  standalone: true,
})
export class PokemonTypeToSpanishPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split('/')
      .map((type) => POKEMON_TYPE_SPANISH[type] ?? type)
      .join('/')
  }
}
