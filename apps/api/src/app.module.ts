import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { databaseConfig } from './database/config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), SurveyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
