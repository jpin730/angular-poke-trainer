import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core'
import {
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  private readonly router = inject(Router)
  private readonly cdr = inject(ChangeDetectorRef)

  loading = true

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart || event instanceof NavigationEnd,
        ),
        map((event) => event instanceof NavigationStart),
      )
      .subscribe((loading) => {
        setTimeout(
          () => {
            this.loading = loading
            this.cdr.detectChanges()
          },
          loading ? 0 : LOADER_DELAY,
        )
      })
  }
}
