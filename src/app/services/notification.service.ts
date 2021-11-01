import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

const COMMON_ERROR_MESSAGE = 'Something went wrong. Please try again.';
const SNACK_BAR_CLASS_MAP: { [key: string]: string } = {
  error: 'snack-bar-error',
  warn: 'snack-bar-warn',
  success: 'snack-bar-success',
  info: 'snack-bar-info'
};

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matSnackBar: MatSnackBar) {
  }

  static getSnackBarClass(type: string): string {
    return SNACK_BAR_CLASS_MAP [type] || '';
  }

  success(message: string): void {
    this.showMessage(message, 'success');
  }

  error(message: string): void {
    this.showMessage(message, 'error');
  }

  warn(message: string): void {
    this.showMessage(message, 'warn');
  }

  info(message: string): void {
    this.showMessage(message, 'info');
  }

  private showMessage(message: string, type: string): void {
    const msg = message || COMMON_ERROR_MESSAGE;
    this.matSnackBar.open(msg, '', {
      duration: 2500,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      panelClass: NotificationService.getSnackBarClass(type)
    });
  }
}
