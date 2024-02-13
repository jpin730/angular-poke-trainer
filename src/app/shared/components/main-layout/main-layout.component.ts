import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router'
import { filter, map } from 'rxjs'

import { LOADER_DELAY } from '@core/constants/loader-delay.constant'
import { HeaderComponent } from '../header/header.component'
import { LoaderComponent } from '../loader/loader.component'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, LoaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  private readonly router = inject(Router)

  loading = true

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel,
        ),
        map((event) => event instanceof NavigationStart),
      )
      .subscribe((loading) =>
        loading
          ? (this.loading = loading)
          : setTimeout(
              () => (this.loading = loading),
              loading ? 0 : LOADER_DELAY,
            ),
      )
  }
}
