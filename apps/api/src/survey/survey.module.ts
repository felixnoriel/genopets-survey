import { Module } from '@nestjs/common';
import { SurveyController } from './controllers/survey.controller';
import { SurveyAnswer } from './entities/survey-answer.entity';
import { SurveyAnswerRepository } from './repositories/survey-answer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyAnswer, SurveyAnswerRepository])],
  controllers: [SurveyController],
})
export class SurveyModule {}
