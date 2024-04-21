import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Schema } from 'yup';
import { serializeValidationError } from '../serializeValidationError';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private readonly schema: Schema<{}>) {}

  async transform(value: any) {
    try {
      await this.schema.validate(value, {abortEarly: false});
    } catch (error) {
      throw serializeValidationError(error);
    }
    return value;
  }
}
