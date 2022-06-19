import { Injectable } from '@angular/core';
import { IModelMetadata } from 'app/shared/models';


@Injectable({ providedIn: 'root' })
export class ModelMetadataService {

  getTodoMeta(): Array<IModelMetadata> {
    return [
      { key: 'id' },
      { key: 'title', required: true },
      { key: 'amount', required: true },
      { key: 'targetDate', required: true },
      { key: 'description', required: true },
      { key: 'status', required: true },
    ];
  }

}
