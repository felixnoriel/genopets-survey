import { Exclude, Expose, Transform } from 'class-transformer';
import {
  BeforeInsert,
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

  @Transform((answer) => {
    if (answer && typeof answer.value === 'string') {
      try {
        return JSON.parse(answer.value);
      } catch (err) {}
    }
  })
  @Column('text', { name: 'answer', default: '' })
  @Expose({ name: 'answer' })
  answer: string[] | string;

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude()
  updatedAt: Date;

  constructor(surveyAnswerData: Partial<SurveyAnswer>) {
    Object.assign(this, surveyAnswerData);
  }

  @BeforeInsert()
  transformAnswerToString() {
    if (typeof this.answer !== 'string') {
      this.answer = JSON.stringify(this.answer);
    }
  }
}
