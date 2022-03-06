import { ClassTransformOptions } from 'class-transformer';

export class Serializable<T> {
  public constructor(
    public readonly data: T | T[],
    public readonly options?: ClassTransformOptions,
  ) {}
}
