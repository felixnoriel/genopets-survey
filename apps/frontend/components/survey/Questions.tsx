import React from 'react';

import {
  Box,
  Flex,
  Text,
  useCheckboxGroup,
  useRadioGroup,
} from '@chakra-ui/react';
import { RadioCard } from 'ui/atoms/radio/RadioCard';
import { SubHeader } from 'ui/atoms/header';
import { useSurveyAnswerStore } from '../../lib/stores/survey';
import {
  QuestionInputType,
  SurveyQuestion,
  SurveyQuestionsData,
} from '../../lib/constants/survey';

interface QuestionProps {
  title?: string;
  choices: string[];
  type: QuestionInputType | string;
  currentAnswer?: string[];
  questionId: string;
  index?: number;
}

const AnswerGroup = ({ type, choices, questionId }: QuestionProps) => {
  const isRadio = type === QuestionInputType.RADIO;
  const { answers, setAnswers } = useSurveyAnswerStore();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: `answer-group=${questionId}`,
    onChange: (selected) => {
      let tempAnswers = answers;
      if (!tempAnswers[questionId]) {
        tempAnswers[questionId] = [];
      }
      tempAnswers[questionId] = [selected];
      setAnswers(tempAnswers);
    },
    defaultValue: answers[questionId]?.[0],
  });

  const { getCheckboxProps, value } = useCheckboxGroup({
    onChange: (newValues) => {
      let tempAnswers = answers;
      if (!tempAnswers[questionId]) {
        tempAnswers[questionId] = [];
      }
      tempAnswers[questionId] = newValues as string[];
      setAnswers(tempAnswers);
    },
    defaultValue: answers[questionId],
  });

  const group = getRootProps();

  return (
    <Flex {...group} direction="column" justify="flex-end" gap={4}>
      {choices.map((choice, i) => {
        const alphabet = String.fromCharCode(97 + i);

        const props = isRadio
          ? getRadioProps({
              value: choice,
            })
          : getCheckboxProps({ value: choice });

        return (
          <RadioCard
            answerIndex={answers?.[questionId]?.indexOf(choice)}
            key={alphabet}
            justify="left"
            type={type}
            leftText={alphabet}
            rightText={choice}
            _checked={true}
            {...(props as any)}
          />
        );
      })}
    </Flex>
  );
};

const Question = ({
  title = ``,
  choices = [],
  type = ``,
  index = 0,
  questionId,
}: QuestionProps) => (
  <Box>
    <SubHeader
      letterSpacing="5px"
      fontFamily="neon-bold"
      fontSize="11px"
      marginBottom={1}
    >
      <strong>{`QUESTION ${index + 1}`}</strong>
    </SubHeader>
    <Text fontFamily="Avenir" color="white" marginBottom={2}>
      {title}
    </Text>
    <AnswerGroup type={type} choices={choices} questionId={questionId} />
  </Box>
);

const SurveyQuestions = () => {
  return (
    <>
      {SurveyQuestionsData.map((question: SurveyQuestion, index) => (
        <Question
          key={question.title}
          questionId={question.id}
          index={index}
          title={question.title}
          choices={question.choices}
          type={question.type}
        />
      ))}
    </>
  );
};

export default SurveyQuestions;
