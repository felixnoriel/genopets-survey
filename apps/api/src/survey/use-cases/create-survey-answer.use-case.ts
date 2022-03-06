import { SurveyAnswerRepository } from '../repositories/survey-answer.repository';
import { Injectable } from '@nestjs/common';
import { SurveyAnswer } from '../entities/survey-answer.entity';

@Injectable()
export class CreateSurveyAnswerUseCase {
  constructor(
    private readonly surveyAnswerRepository: SurveyAnswerRepository,
  ) {}

  run(surveyAnswer: Partial<SurveyAnswer>): Promise<SurveyAnswer> {
    return this.surveyAnswerRepository.save(new SurveyAnswer(surveyAnswer));
  }
}
