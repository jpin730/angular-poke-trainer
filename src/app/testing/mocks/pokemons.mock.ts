import { Pokemon } from '@core/interfaces/pokemon.interface'

export const pokemonsMock: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
    type: 'grass/poison',
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
  },
  {
    id: 4,
    name: 'charmander',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
    type: 'fire',
    hp: 39,
    attack: 52,
    defense: 43,
    specialAttack: 60,
    specialDefense: 50,
    speed: 65,
  },
  {
    id: 7,
    name: 'squirtle',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png',
    type: 'water',
    hp: 44,
    attack: 48,
    defense: 65,
    specialAttack: 50,
    specialDefense: 64,
    speed: 43,
  },
]
