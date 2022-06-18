import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AppValidators } from './app-validators';
import { IModelMetadata } from '../models';

export class FormHelper {

  public static toFormGroup(modelMetadatas: IModelMetadata[], model?: any): FormGroup {
    const group: any = {};
    modelMetadatas.forEach((modelMetaData) => {

      const validationArray: any[] = [];
      if (modelMetaData.required) {
        validationArray.push(Validators.required);
      }

      if (modelMetaData.requiredTrue) {
        validationArray.push(Validators.requiredTrue);
      }

      if (modelMetaData.email) {
        validationArray.push(AppValidators.customEmail);
      }

      if (modelMetaData.validateEqual) {
        validationArray.push(AppValidators.matchOtherValidator(modelMetaData.validateEqual));
      }

      if (modelMetaData.minLength) {
        validationArray.push(Validators.minLength(modelMetaData.minLength));
      }

      if (modelMetaData.maxLength) {
        validationArray.push(Validators.maxLength(modelMetaData.maxLength));
      }

      if (model) {
        group[modelMetaData.key] = new FormControl(model[modelMetaData.key] || null, validationArray);
      } else {
        group[modelMetaData.key] = new FormControl(null, validationArray);
      }
    });

    return new FormGroup(group);
  }
}
