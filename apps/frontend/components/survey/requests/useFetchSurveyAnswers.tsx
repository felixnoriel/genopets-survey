import { useSurveyAnswerStore } from '../../../lib/stores/survey';
import { useEffect, useState } from 'react';

import { axiosInstance } from '../../../lib/http-requests/axios';

export const useFetchSurveyAnswers = (): {
  isLoading: boolean;
} => {
  const { setAnswers, setAnswerExists } = useSurveyAnswerStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSurveyAnswers = async () => {
      const { data } = await axiosInstance.get('/survey/answers');
      const { data: surveyAnswers } = data;

      const answers = {} as Record<string, string[]>;
      for (const answer of surveyAnswers) {
        answers[answer.question_id] = answer.answer;
      }

      setAnswers(answers);

      if (surveyAnswers.length > 0) {
        setAnswerExists(true);
      }
      setIsLoading(false);
    };

    fetchSurveyAnswers();
  }, []);

  return {
    isLoading,
  };
};
