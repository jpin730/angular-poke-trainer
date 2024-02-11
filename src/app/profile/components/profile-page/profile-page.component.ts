import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'

import { MaterialModule } from '@app-material/material.module'
import { TrainerCardComponent } from '@shared/components/trainer-card/trainer-card.component'
import { AvatarUploaderComponent } from '../avatar-uploader/avatar-uploader.component'
import { ProfileFormComponent } from '../profile-form/profile-form.component'

const components = [
  AvatarUploaderComponent,
  ProfileFormComponent,
  TrainerCardComponent,
]

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [MaterialModule, RouterLink, ...components],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {}
