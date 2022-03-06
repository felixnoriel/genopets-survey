import React, { useState } from 'react';

import {
  Box,
  Flex,
  Text,
  useCheckboxGroup,
  useRadioGroup,
} from '@chakra-ui/react';
import theme from 'ui/theme';
import { GodCommandsRaphaelText } from 'ui/atoms/text/EnochGodCommandsRaphaelText';
import { RadioCard } from 'ui/atoms/radio/RadioCard';
import { Button } from 'ui/atoms/button/Button';
import AlgorithmSvg from 'ui/icons/svg/AlgorithmSvg';
import { SubHeader } from 'ui/atoms/header';
import { useSurveyAnswerStore } from '../lib/stores/survey';
import {
  QuestionInputType,
  SurveyQuestionsData,
} from '../lib/constants/survey';

const color = theme.colors.teal[`500`];

interface QuestionProps {
  title?: string;
  choices: string[];
  type: QuestionInputType | string;
  index: number;
  currentAnswer?: string[];
}

const AnswerGroup = ({ type, choices, index }: QuestionProps) => {
  const isRadio = type === QuestionInputType.RADIO;
  const { answers, setAnswers } = useSurveyAnswerStore();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: `answer-group=${index}`,
    onChange: (selected) => {
      let tempAnswers = answers;
      if (!tempAnswers[index]) {
        tempAnswers[index] = [];
      }
      tempAnswers[index] = [selected];
      setAnswers(tempAnswers);
    },
  });

  const { getCheckboxProps, value } = useCheckboxGroup({
    onChange: (newValues) => {
      let tempAnswers = answers;
      if (!tempAnswers[index]) {
        tempAnswers[index] = [];
      }
      tempAnswers[index] = newValues as string[];
      setAnswers(tempAnswers);
    },
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
            answerIndex={answers?.[index]?.indexOf(choice)}
            key={alphabet}
            justify="left"
            type={type}
            leftText={alphabet}
            rightText={choice}
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
    <AnswerGroup type={type} choices={choices} index={index} />
  </Box>
);

const Survey = () => {
  const { setAnswers } = useSurveyAnswerStore();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = () => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 3000);
  };

  return (
    <Flex
      color={color}
      direction="column"
      gap={2}
      justify="flex-end"
      height="full"
    >
      <Flex mt={8} alignItems="center" gap={4}>
        <Box h="64px" w="64px">
          <AlgorithmSvg />
        </Box>
      </Flex>
      <SubHeader letterSpacing="initial">SURVEY</SubHeader>
      <GodCommandsRaphaelText />
      <Text fontFamily="Avenir" color="white" marginBottom={2}>
        Tell us a bit more about you and what you’re looking for in Genopets.
      </Text>
      <Flex direction="column" justify="flex-end" gap={8}>
        {SurveyQuestionsData.map((question, index) => (
          <Question key={question.title} {...question} index={index} />
        ))}
        <Button onClick={onSubmit} color="#ffd800" isLoading={submitting}>
          Submit & Complete
        </Button>
      </Flex>
    </Flex>
  );
};

export default Survey;
