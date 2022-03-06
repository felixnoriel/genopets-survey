import { Module } from '@nestjs/common';
import { SurveyAnswer } from './entities/survey-answer.entity';
import { SurveyAnswerRepository } from './repositories/survey-answer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './controllers/survey.controller';
import { CreateSurveyAnswerUseCase } from './use-cases/create-survey-answer.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyAnswer, SurveyAnswerRepository])],
  controllers: [SurveyController],
  providers: [CreateSurveyAnswerUseCase],
})
export class SurveyModule {}
