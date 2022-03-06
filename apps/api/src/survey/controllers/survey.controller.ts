import { Body, Controller, Post } from '@nestjs/common';
import { CreateSurveyAnswerUseCase } from '../use-cases/create-survey-answer.use-case';
import { CreateSurveyAnswerRequest } from './requests/create-survey-answer.request';
import { SurveyAnswer } from '../entities/survey-answer.entity';

@Controller('survey')
export class SurveyController {
  constructor(private readonly createSurveyAnswer: CreateSurveyAnswerUseCase) {}

  @Post('answers')
  submitSurvey(
    @Body() createAnswerData: CreateSurveyAnswerRequest,
  ): Promise<SurveyAnswer> {
    return this.createSurveyAnswer.run(createAnswerData);
  }
}
