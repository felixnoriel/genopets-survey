import { ClassSerializerInterceptor, PlainLiteralObject } from '@nestjs/common';
import { ClassTransformOptions } from 'class-transformer';

export class SerializerInterceptor extends ClassSerializerInterceptor {
  serialize(
    response: PlainLiteralObject | Array<PlainLiteralObject>,
    options: ClassTransformOptions,
  ): PlainLiteralObject | PlainLiteralObject[] {
    if (Array.isArray(response)) {
      return response.map((item) => this.serialize(item, options));
    }

    return this.serializeNestedObject(response, options);
  }

  private serializeNestedObject(
    object: PlainLiteralObject,
    options: ClassTransformOptions,
  ): PlainLiteralObject {
    const result: PlainLiteralObject = {};

    Object.keys(object).map((key: string) => {
      result[key] = super.serialize(object[key], options);
    });

    return result;
  }
}
