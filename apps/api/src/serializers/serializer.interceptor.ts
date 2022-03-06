import { ClassSerializerInterceptor, PlainLiteralObject } from '@nestjs/common';
import { ClassTransformOptions } from 'class-transformer';
import { Serializable } from './serializable';

export class SerializerInterceptor extends ClassSerializerInterceptor {
  serialize(
    response: PlainLiteralObject | Array<PlainLiteralObject>,
    options: ClassTransformOptions,
  ): PlainLiteralObject | PlainLiteralObject[] {
    if (Array.isArray(response)) {
      return response.map((item) => this.serialize(item, options));
    }

    if (!this.hasSerializableProperties(response)) {
      return super.serialize(response, options);
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

  private hasSerializableProperties(response: PlainLiteralObject): boolean {
    return (
      Object.values(response).filter(
        (item: PlainLiteralObject) => item instanceof Serializable,
      ).length > 0
    );
  }
}
