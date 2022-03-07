import create from 'zustand';

type SurveyAnswerStoreType = {
  answers: Record<string, string[]>;
  setAnswers: (answers: Record<string, string[]>) => void;
  answerExists: boolean;
  setAnswerExists: (value: boolean) => void;
};

export const useSurveyAnswerStore = create<SurveyAnswerStoreType>(
  (set, get) => ({
    answers: {},
    setAnswers: (answers: Record<string, string[]>) => {
      return set({
        answers,
      });
    },
    answerExists: false,
    setAnswerExists: (value: boolean) => {
      return set({
        answerExists: value,
      });
    },
  }),
);
