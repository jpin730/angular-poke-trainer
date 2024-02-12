import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'

import { Pokemon } from '@core/interfaces/pokemon.interface'

@Component({
  selector: 'app-pokemon-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-selector.component.html',
  styleUrl: './pokemon-selector.component.scss',
})
export class PokemonSelectorComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)

  pokemons$!: Observable<Pokemon[]>

  ngOnInit() {
    this.pokemons$ = this.route.data.pipe(map((data) => data['pokemons'] ?? []))
  }
}
