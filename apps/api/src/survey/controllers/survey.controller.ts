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
  async submitSurvey(
    @Body() createAnswerDataList: CreateSurveyAnswerRequest[],
  ): Promise<SurveyAnswer[]> {
    const answers = [];
    for (const answerData of createAnswerDataList) {
      answers.push(await this.createSurveyAnswer.run(answerData));
    }
    return answers;
  }

  @Get('answers')
  getSurveyAnswers(): Promise<SurveyAnswer[]> {
    return this.fetchSurveyAnswers.run();
  }
}
