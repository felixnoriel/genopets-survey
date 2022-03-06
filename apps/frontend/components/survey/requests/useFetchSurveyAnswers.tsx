import { useSurveyAnswerStore } from '../../../lib/stores/survey';
import { useEffect } from 'react';

import { axiosInstance } from '../../../lib/http-requests/axios';

export const useFetchSurveyAnswers = () => {
  const { setAnswers } = useSurveyAnswerStore();

  useEffect(() => {
    const fetchSurveyAnswers = async () => {
      const { data } = await axiosInstance.get('/survey/answers');
      const { data: surveyAnswers } = data;

      setAnswers(surveyAnswers);
    };

    fetchSurveyAnswers();
  }, []);
};
