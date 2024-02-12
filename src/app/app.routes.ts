import { Routes } from '@angular/router'

import { PATH } from '@core/constants/path.constant'
import { homeGuard } from '@core/guards/home.guard'
import { pokemonsGuard } from '@core/guards/pokemons.guard'
import { firstGenerationPokemonsResolver } from '@core/resolvers/first-generation-pokemons.resolver'
import { MainLayoutComponent } from '@shared/components/main-layout/main-layout.component'

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: PATH.HOME,
        loadComponent: () =>
          import('./home/components/home-page/home-page.component').then(
            (m) => m.HomePageComponent,
          ),
        canActivate: [homeGuard],
      },
      {
        path: PATH.PROFILE,
        loadComponent: () =>
          import(
            './profile/components/profile-page/profile-page.component'
          ).then((m) => m.ProfilePageComponent),
      },
      {
        path: PATH.POKEMONS,
        loadComponent: () =>
          import(
            './pokemons/components/pokemons-page/pokemons-page.component'
          ).then((m) => m.PokemonsPageComponent),
        resolve: { pokemons: firstGenerationPokemonsResolver },
        canActivate: [pokemonsGuard],
      },
      {
        path: '**',
        redirectTo: PATH.PROFILE,
      },
    ],
  },
]
