import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor( private snackBar: MatSnackBar) { }

  showToast(message: string, duration: number = 1000) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top'; // Set the vertical position to top
    config.horizontalPosition = 'center'; // Center the snack bar horizontally
    config.duration = duration; // Set the duration of the snack bar
    config.panelClass = ['custom-toast-message']; // Apply custom CSS class

    this.snackBar.open(message, 'Close', config);
  }


}
