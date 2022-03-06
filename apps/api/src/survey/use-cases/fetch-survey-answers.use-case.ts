import { Injectable } from '@nestjs/common';
import { SurveyAnswerRepository } from '../repositories/survey-answer.repository';
import { SurveyAnswer } from '../entities/survey-answer.entity';

@Injectable()
export class FetchSurveyAnswersUseCase {
  constructor(
    private readonly surveyAnswerRepository: SurveyAnswerRepository,
  ) {}

  run(): Promise<SurveyAnswer[]> {
    return this.surveyAnswerRepository.find();
  }
}
