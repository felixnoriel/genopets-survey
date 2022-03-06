import { SurveyAnswer } from '../entities/survey-answer.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(SurveyAnswer)
export class SurveyAnswerRepository extends Repository<SurveyAnswer> {}
