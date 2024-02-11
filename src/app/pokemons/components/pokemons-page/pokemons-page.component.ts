import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsPageComponent {}
