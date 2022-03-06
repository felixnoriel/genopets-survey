import { TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SerializerInterceptor } from '../src/serializers/serializer.interceptor';

export const createApp = async (
  module: TestingModule,
): Promise<INestApplication> => {
  const app = module.createNestApplication();
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useGlobalInterceptors(new SerializerInterceptor(app.get(Reflector)));
  app.enableShutdownHooks();

  jest.setTimeout(30000);

  return app.init();
};
