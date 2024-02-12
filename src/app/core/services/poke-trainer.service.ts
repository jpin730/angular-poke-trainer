import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs'

import { API_BASE_URL } from '@core/constants/api-base-url.constant'
import { POKEMON_GEN_1 } from '@core/constants/pokemon-gen.constant'
import {
  GetPokemonResponse,
  Stat,
} from '@core/interfaces/get-pokemon-response.interface'
import { Pokemon, PokemonStats } from '@core/interfaces/pokemon.interface'
import { Profile } from '@core/interfaces/profile.interface'
import { Trainer } from '@core/interfaces/trainer.interface'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { trainerMock } from 'testing/mocks/moked-trainer.mock'
import { pokemonsMock } from 'testing/mocks/pokemons.mock'

@Injectable({
  providedIn: 'root',
})
export class PokeTrainerService {
  private readonly snackBarService = inject(SnackBarService)
  private readonly http = inject(HttpClient)

  private readonly apiBaseUrl = API_BASE_URL

  private _profile: Profile | null = { ...trainerMock }
  private _avatar: string | null = trainerMock.avatar
  private _pokemons: Pokemon[] | null = [...pokemonsMock]

  private firstGenerationPokemons: Record<number, Pokemon> = {}

  set profile(profile: Profile | null) {
    this._profile = profile && { ...profile }
  }

  get profile() {
    return this._profile && { ...this._profile }
  }

  set avatar(avatar: string | null) {
    this._avatar = avatar
  }

  get avatar() {
    return this._avatar
  }

  get trainer(): Trainer | null {
    return this._avatar && this._profile
      ? { ...this._profile, avatar: this._avatar }
      : null
  }

  set pokemonIds(ids: number[] | null) {
    this._pokemons = ids && ids.map((id) => this.firstGenerationPokemons[id])
  }

  get pokemons() {
    return this._pokemons && [...this._pokemons]
  }

  getFirstGenerationPokemons(): Observable<Pokemon[]> {
    return forkJoin(
      Array(POKEMON_GEN_1)
        .fill(null)
        .map((_, index) => this.getPokemonById(index + 1, false)),
    ).pipe(
      map(
        (pokemons) =>
          pokemons.filter((pokemon) => {
            if (pokemon === null) {
              this.snackBarService.open(
                `Error al cargar algunos o todos pokemons. Intenta de nuevo.`,
              )
              return false
            }

            return true
          }) as Pokemon[],
      ),
    )
  }

  getPokemonById(id: number, displayError = true): Observable<Pokemon | null> {
    const pokemon = this.firstGenerationPokemons[id]

    return pokemon
      ? of(pokemon)
      : this.http
          .get<GetPokemonResponse>(`${this.apiBaseUrl}/pokemon/${id}`)
          .pipe(
            map(({ id, name, sprites, types, stats }) => ({
              id,
              name,
              sprite: sprites.other?.home.front_default ?? '',
              type: types.map(({ type }) => type.name).join('/'),
              ...this.getStatsMap(stats),
            })),
            tap(
              (pokemon) => (this.firstGenerationPokemons[pokemon.id] = pokemon),
            ),
            catchError(() => {
              if (displayError) {
                this.snackBarService.open(
                  `Error al cargar pokemon con id: "${id}". Intenta de nuevo.`,
                )
              }
              return of(null)
            }),
          )
  }

  private getStatsMap(stats: Stat[]): PokemonStats {
    return stats.reduce((acc, { stat, base_stat }) => {
      if (stat.name.includes('-')) {
        const [firstWord, secondWord] = stat.name.split('-')
        stat.name =
          firstWord + secondWord[0].toUpperCase() + secondWord.slice(1)
      }

      acc[stat.name as keyof PokemonStats] = base_stat
      return acc
    }, {} as PokemonStats)
  }
}
