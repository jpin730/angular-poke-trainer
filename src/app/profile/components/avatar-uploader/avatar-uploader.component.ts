import { Component, ElementRef, ViewChild } from '@angular/core'

import { MaterialModule } from '@app-material/material.module'
import { AvatarComponent } from '@shared/components/avatar/avatar.component'

@Component({
  selector: 'app-avatar-uploader',
  standalone: true,
  imports: [MaterialModule, AvatarComponent],
  templateUrl: './avatar-uploader.component.html',
  styleUrl: './avatar-uploader.component.scss',
})
export class AvatarUploaderComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>

  avatarUrl = ''
  fileName = ''

  saveAvatar(event: Event) {
    const target = event.target as HTMLInputElement
    const files = target.files as FileList

    if (files.length !== 0) {
      const file = files.item(0) as File
      this.avatarUrl = URL.createObjectURL(file)
      this.fileName = file.name
    }
  }

  clearAvatar() {
    this.avatarUrl = ''
    this.fileInput.nativeElement.value = ''
    this.fileName = ''
  }
}
