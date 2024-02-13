import { Component, ElementRef, ViewChild, inject } from '@angular/core'

import { MaterialModule } from '@app-material/material.module'
import { PokeTrainerService } from '@core/services/poke-trainer.service'
import { AvatarComponent } from '@shared/components/avatar/avatar.component'

@Component({
  selector: 'app-avatar-uploader',
  standalone: true,
  imports: [MaterialModule, AvatarComponent],
  templateUrl: './avatar-uploader.component.html',
  styleUrl: './avatar-uploader.component.scss',
})
export class AvatarUploaderComponent {
  private readonly pokeTrainerService = inject(PokeTrainerService)

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>

  avatarUrl = this.pokeTrainerService.avatar ?? ''
  fileName = this.pokeTrainerService.avatar ? 'Eliminar' : ''

  saveAvatar(event: Event) {
    const target = event.target as HTMLInputElement
    const files = target.files as FileList

    if (files.length !== 0) {
      const file = files.item(0) as File
      this.avatarUrl = URL.createObjectURL(file)
      this.fileName = file.name
      this.pokeTrainerService.avatar = this.avatarUrl
    }
  }

  clearAvatar() {
    this.fileName = ''
    this.avatarUrl = ''
    this.fileInput.nativeElement.value = ''
    this.pokeTrainerService.avatar = null
  }
}
