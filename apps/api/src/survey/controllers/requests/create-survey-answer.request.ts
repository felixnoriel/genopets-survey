import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class SurveyAnswerObjectRequest {
  @Expose({ name: 'question_id' })
  questionId: string;

  @Expose({ name: 'answer' })
  answer: string[];

  constructor(data: Partial<SurveyAnswerObjectRequest>) {
    Object.assign(this, data);
  }
}

export class CreateSurveyAnswerRequest {
  @Expose({ name: 'survey_answers' })
  @IsNotEmpty({ message: 'survey_answers is required!' })
  surveyAnswers: SurveyAnswerObjectRequest[];
}
