import { Injectable, inject } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar' // Import MatSnackBar from @angular/material/snack-bar

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private readonly snackBar = inject(MatSnackBar)

  config: MatSnackBarConfig = {
    duration: 3000,
  }

  open(message: string, action = 'Cerrar') {
    this.snackBar.open(message, action, { ...this.config })
  }
}
