import { Injectable, inject } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar' // Import MatSnackBar from @angular/material/snack-bar

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private readonly snackBar = inject(MatSnackBar)

  open(message: string, action = 'Cerrar') {
    this.snackBar.open(message, action)
  }
}
