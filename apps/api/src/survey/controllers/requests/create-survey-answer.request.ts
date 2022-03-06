import { Expose } from 'class-transformer';

export class CreateSurveyAnswerRequest {
  @Expose({ name: 'question_id' })
  questionId: string;

  @Expose({ name: 'answer' })
  answer: string;
}
