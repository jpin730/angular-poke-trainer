import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { PATH } from '@core/constants/path.constant'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  message = location.pathname.includes(PATH.HOME)
    ? 'Cargando perfil...'
    : 'Cargando...'
}
