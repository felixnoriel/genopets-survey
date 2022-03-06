import create from 'zustand';

type SurveyAnswerType = {
  answers: Record<string, string[]>;
  setAnswers: (answers: Record<string, string[]>) => void;
};

export const useSurveyAnswerStore = create<SurveyAnswerType>((set, get) => ({
  answers: {},
  setAnswers: (answers: Record<string, string[]>) => {
    return set({
      answers,
    });
  },
}));
