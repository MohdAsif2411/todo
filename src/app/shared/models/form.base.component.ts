import { BaseComponent } from './base.component';
import { AppNotificationService } from '@app/services';

export class FormBaseComponent extends BaseComponent {

  constructor(protected notificationService: AppNotificationService) {
    super();
  }

  private _submitProcessing: boolean;
  set submitProcessing(value: boolean) {
    // Also update disableSubmitButton value
    this._disableSubmitButton = this._submitProcessing = value;
  }
  get submitProcessing() {
    return this._submitProcessing;
  }

  _disableSubmitButton: boolean;
  get disableSubmitButton() {
    return this._disableSubmitButton;
  }

  showValidationMessages: boolean;


  // ****** methods to keep behaviour similar on all pages and updatable from single place

  submitProcessStart() {
    if (this instanceof FormBaseComponent) {
      this.submitProcessing = true;
    } else {
      console.error('wrong call of submitProcessStart');
    }
  }

  submitProcessComplete() {
    if (this instanceof FormBaseComponent) {
      this.submitProcessing = false;
    } else {
      console.error('wrong call of submitProcessComplete');
    }
  }

  notifyValidationError() {
    if (this instanceof FormBaseComponent) {
      this.notificationService.notifyLocalValidationError();
      this.submitProcessing = false;
    } else {
      console.error('wrong call of notifyValidationError');
    }
  }

  notifyErrorFromApi() {
    if (this instanceof FormBaseComponent) {
      this.notificationService.notifyError();
      this.submitProcessing = false;
    } else {
      console.error('wrong call of notifyErrorFromApi');
    }
  }

}
