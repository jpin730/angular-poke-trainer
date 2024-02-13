import { Pipe, PipeTransform } from '@angular/core'

import { POKEMON_TYPE_COLOR } from '@core/constants/pokemon-type.constant'

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true,
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(value: string): string {
    const firstType = value.split('/').at(0) ?? ''
    return POKEMON_TYPE_COLOR[firstType] ?? POKEMON_TYPE_COLOR['unknown']
  }
}
