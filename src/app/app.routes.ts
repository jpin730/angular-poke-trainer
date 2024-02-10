import { Routes } from '@angular/router'

import { PATH } from '@core/constants/path.constant'
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
      },
      {
        path: '**',
        redirectTo: PATH.PROFILE,
      },
    ],
  },
]
