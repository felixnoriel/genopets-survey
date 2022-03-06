import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSurveyAnswerRequest {
  @IsString()
  @IsNotEmpty({ message: 'question_id required!' })
  @Expose({ name: 'question_id' })
  questionId: string;

  @IsString()
  @IsNotEmpty({ message: 'answer is required!' })
  @Expose({ name: 'answer' })
  answer: string;
}
