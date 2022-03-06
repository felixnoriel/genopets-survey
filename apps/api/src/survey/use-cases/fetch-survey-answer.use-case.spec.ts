import { SurveyAnswerRepository } from '../repositories/survey-answer.repository';
import { FetchSurveyAnswersUseCase } from './fetch-survey-answers.use-case';

describe('FetchSurveyAnswersUseCase', () => {
  const surveyAnswerRepository = {
    find: jest.fn().mockImplementation(() => {
      return [{ questionId: '1', answer: 'I do' }];
    }),
  } as unknown as SurveyAnswerRepository;

  it('fetch all survey answers', async () => {
    const fetchSurveyAnswerUseCase = new FetchSurveyAnswersUseCase(
      surveyAnswerRepository,
    );

    const surveyAnswers = await fetchSurveyAnswerUseCase.run();
    expect(surveyAnswers.length).toBeGreaterThanOrEqual(1);
    expect(surveyAnswers[0].questionId).toBe('1');
    expect(surveyAnswers[0].answer).toBe('I do');
  });
});
