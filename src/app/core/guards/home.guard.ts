import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { PATH } from '@core/constants/path.constant'
import { PokeTrainerService } from '@core/services/poke-trainer.service'

export const homeGuard: CanActivateFn = () => {
  const pokeTrainerService = inject(PokeTrainerService)
  const router = inject(Router)

  if (!pokeTrainerService.trainer) return router.parseUrl(`/${PATH.PROFILE}`)

  if (!pokeTrainerService.pokemons) return router.parseUrl(`/${PATH.POKEMONS}`)

  return true
}
