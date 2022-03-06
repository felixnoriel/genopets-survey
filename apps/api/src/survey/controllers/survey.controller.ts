import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSurveyAnswerUseCase } from '../use-cases/create-survey-answer.use-case';
import { CreateSurveyAnswerRequest } from './requests/create-survey-answer.request';
import { SurveyAnswer } from '../entities/survey-answer.entity';
import { FetchSurveyAnswersUseCase } from '../use-cases/fetch-survey-answers.use-case';

@Controller('v1/survey')
export class SurveyController {
  constructor(
    private readonly createSurveyAnswer: CreateSurveyAnswerUseCase,
    private readonly fetchSurveyAnswers: FetchSurveyAnswersUseCase,
  ) {}

  @Post('answers')
  submitSurvey(
    @Body() createAnswerData: CreateSurveyAnswerRequest,
  ): Promise<SurveyAnswer> {
    return this.createSurveyAnswer.run(createAnswerData);
  }

  @Get('answers')
  getSurveyAnswers(): Promise<SurveyAnswer[]> {
    return this.fetchSurveyAnswers.run();
  }
}
