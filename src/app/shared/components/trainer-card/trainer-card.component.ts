import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-trainer-card',
  standalone: true,
  templateUrl: './trainer-card.component.html',
  styleUrl: './trainer-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainerCardComponent {}
