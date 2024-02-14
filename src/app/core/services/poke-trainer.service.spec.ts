import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

import { API_BASE_URL } from '@core/constants/api-base-url.constant'
import { POKEMON_GEN_1 } from '@core/constants/pokemon-gen.constant'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { forkJoin, of, take } from 'rxjs'
import { API_RESPONSE_MOCK } from 'testing/mocks/api-response.mock'
import { MAX_STATS_MOCK } from 'testing/mocks/max-stats.mock'
import { POKEMONS_ID_MOCK, POKEMONS_MOCK } from 'testing/mocks/pokemons.mock'
import { TRAINER_MOCK } from 'testing/mocks/trainer.mock'
import { PokeTrainerService } from './poke-trainer.service'

describe('PokeTrainerService', () => {
  let service: PokeTrainerService
  let httpTestingController: HttpTestingController
  const snackBarServiceSpy = jasmine.createSpyObj('SnackBarService', ['open'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: SnackBarService, useValue: snackBarServiceSpy }],
    })
    service = TestBed.inject(PokeTrainerService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should set and get profile', () => {
    service.profile = TRAINER_MOCK
    expect(service.profile).toEqual(TRAINER_MOCK)
  })

  it('should set and get avatar', () => {
    service.avatar = 'avatar'
    expect(service.avatar).toEqual('avatar')
  })

  it('should get trainer', () => {
    service.profile = TRAINER_MOCK
    service.avatar = 'avatar'
    expect(service.trainer).toEqual({ ...TRAINER_MOCK, avatar: 'avatar' })
  })

  it('should not set maxStats when are null', () => {
    service.maxStats = null
    expect(service.maxStats).toEqual(null)
  })

  it('should set and get pokemonIds and get pokemons', () => {
    forkJoin([
      service.getPokemonById(POKEMONS_ID_MOCK[0]),
      service.getPokemonById(POKEMONS_ID_MOCK[1]),
      service.getPokemonById(POKEMONS_ID_MOCK[2]),
    ]).subscribe((res) => {
      expect(res).toEqual(POKEMONS_MOCK)
      service.pokemonIds = POKEMONS_ID_MOCK
      expect(service.pokemonIds).toEqual(POKEMONS_ID_MOCK)
      expect(service.maxStats).toEqual(MAX_STATS_MOCK)
      expect(service.pokemons).toEqual(POKEMONS_MOCK)
    })

    const requests = httpTestingController.match({ method: 'GET' })
    expect(requests.length).toEqual(3)

    requests[0].flush(API_RESPONSE_MOCK[0])
    requests[1].flush(API_RESPONSE_MOCK[1])
    requests[2].flush(API_RESPONSE_MOCK[2])
  })

  it('should get pokemon by id', () => {
    const pokemonId = POKEMONS_ID_MOCK[0]
    const pokemon = POKEMONS_MOCK[0]

    service.getPokemonById(pokemonId).subscribe((res) => {
      expect(res).toEqual(pokemon)
    })

    const req = httpTestingController.expectOne(
      `${API_BASE_URL}/pokemon/${pokemonId}`,
    )

    expect(req.request.method).toEqual('GET')

    req.flush(API_RESPONSE_MOCK[0])

    httpTestingController.verify()
  })

  it('should open snackbar on getPokemonById error', () => {
    const pokemonId = 0

    service.getPokemonById(pokemonId).subscribe()

    const req = httpTestingController.expectOne(
      `${API_BASE_URL}/pokemon/${pokemonId}`,
    )

    req.flush('404 Not Found', { status: 404, statusText: 'Not Found' })

    expect(snackBarServiceSpy.open).toHaveBeenCalledOnceWith(
      `Error al cargar pokemon con id: "${pokemonId}". Intenta de nuevo.`,
    )

    snackBarServiceSpy.open.calls.reset()

    httpTestingController.verify()
  })

  it('should get first generation pokemons', () => {
    const getPokemonByIdSpy = spyOn(service, 'getPokemonById')

    getPokemonByIdSpy.and.returnValue(of(POKEMONS_MOCK[0]))

    service.getFirstGenerationPokemons().subscribe(() => {
      expect(getPokemonByIdSpy).toHaveBeenCalledTimes(POKEMON_GEN_1)
    })
  })

  it('should open snackbar on getFirstGenerationPokemons error', () => {
    const getPokemonByIdSpy = spyOn(service, 'getPokemonById')

    getPokemonByIdSpy.and.returnValue(of(null))

    service
      .getFirstGenerationPokemons()
      .pipe(take(1))
      .subscribe(() => {
        expect(snackBarServiceSpy.open).toHaveBeenCalledWith(
          `Error al cargar algunos o todos pokemons. Intenta de nuevo.`,
        )
        snackBarServiceSpy.open.calls.reset()
      })
  })
})
