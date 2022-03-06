import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('survey_answers_pkey', ['id'], { unique: true })
@Entity('survey_answers')
export class SurveyAnswer {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Expose({ name: 'question_id' })
  @Column('varchar', { name: 'question_id', default: '' })
  questionId: string;

  @Column('varchar', { name: 'answer', default: '' })
  answer: string;

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude()
  updatedAt: Date;

  constructor(surveyAnswerData: Partial<SurveyAnswer>) {
    Object.assign(this, surveyAnswerData);
  }
}
