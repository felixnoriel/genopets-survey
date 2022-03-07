import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSurveyAnswerUseCase } from '../use-cases/create-survey-answer.use-case';
import {
  CreateSurveyAnswerRequest,
  SurveyAnswerObjectRequest,
} from './requests/create-survey-answer.request';
import { SurveyAnswer } from '../entities/survey-answer.entity';
import { FetchSurveyAnswersUseCase } from '../use-cases/fetch-survey-answers.use-case';
import { Serializable } from '../../serializers/serializable';
import { plainToClass } from 'class-transformer';

@Controller('v1/survey')
export class SurveyController {
  constructor(
    private readonly createSurveyAnswer: CreateSurveyAnswerUseCase,
    private readonly fetchSurveyAnswers: FetchSurveyAnswersUseCase,
  ) {}

  @Post('answers')
  async submitSurvey(
    @Body()
    createSurveyAnswerRequest: CreateSurveyAnswerRequest,
  ): Promise<Serializable<SurveyAnswer[]>> {
    const { surveyAnswers } = createSurveyAnswerRequest;

    const answers = [];
    for (const answerData of surveyAnswers) {
      answers.push(
        await this.createSurveyAnswer.run(
          plainToClass(SurveyAnswerObjectRequest, answerData),
        ),
      );
    }
    return new Serializable<SurveyAnswer[]>(answers);
  }

  @Get('answers')
  async getSurveyAnswers(): Promise<Serializable<SurveyAnswer[]>> {
    return new Serializable<SurveyAnswer[]>(
      await this.fetchSurveyAnswers.run(),
    );
  }
}
