import { SurveyAnswerRepository } from '../repositories/survey-answer.repository';
import { CreateSurveyAnswerUseCase } from './create-survey-answer.use-case';

describe('CreateSurveyAnswerUseCase', () => {
  const surveyAnswerRepository = {
    save: jest.fn().mockImplementation((entity) => {
      return entity;
    }),
  } as unknown as SurveyAnswerRepository;

  it('should create a survey answer', async () => {
    const createSurveyAnswerUseCase = new CreateSurveyAnswerUseCase(
      surveyAnswerRepository,
    );

    const newSurveyAnswer = { questionId: '1', answer: 'I do' };
    const created = await createSurveyAnswerUseCase.run(newSurveyAnswer);

    expect(created.questionId).toBe(newSurveyAnswer.questionId);
    expect(created.answer).toBe(newSurveyAnswer.answer);
  });
});
