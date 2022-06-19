import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotyService {

  constructor(private _snackbar: MatSnackBar) { }

  notifyNotAllowed(message?: string, action?: string) {
    this._snackbar.open(message || 'Please contact admin to extend your role with App.', action || 'Not Authorize', {
      duration: 2000,
    });
  }

  notifySuccess(message: string, action?: string) {
    this._snackbar.open(message, action || 'Successully saved!', {
      duration: 2000,
    });
  }

  notifyBadRequest(message: string, action?: string) {
    this._snackbar.open(message, action || 'Validation error', {
      duration: 2000,
    });
  }

  notifyLocalValidationError(message?: string, action?: string) {
    this._snackbar.open(message || 'Please check the form', action || 'Validation failed',
      {
        duration: 2000,
      });
  }

  notifyError(message?: string, action?: string) {
    this._snackbar.open(message || 'Please try again', action || 'Error occurred',
      {
        duration: 2000,
      });
  }

}
