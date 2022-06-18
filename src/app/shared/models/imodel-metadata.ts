export interface IModelMetadata {
  key: string;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  validateEqual?: string;
}
