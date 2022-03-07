import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import theme from 'ui/theme';
import { GodCommandsRaphaelText } from 'ui/atoms/text/EnochGodCommandsRaphaelText';
import { Button } from 'ui/atoms/button/Button';
import AlgorithmSvg from 'ui/icons/svg/AlgorithmSvg';

import { SubHeader } from 'ui/atoms/header';
import { useSurveyAnswerStore } from '../../lib/stores/survey';
import { useFetchSurveyAnswers } from './requests/useFetchSurveyAnswers';
import Questions from './Questions';
import { SurveyQuestionsData } from '../../lib/constants/survey';
import { axiosInstance } from '../../lib/http-requests/axios';
import Panel from 'ui/atoms/panel/Panel';

const color = theme.colors.teal[`500`];

const Survey = () => {
  const { answers, answerExists, setAnswerExists } = useSurveyAnswerStore();
  const [submitting, setSubmitting] = useState(false);
  const { isLoading } = useFetchSurveyAnswers();

  const onSubmit = async () => {

    if (answerExists) return;
    if (!hasAllQuestionsBeenAnswered()) {
      return alert('Please answer all questions');
    }
    await createSurveyAnswer();
  };

  const createSurveyAnswer = async () => {
    setSubmitting(true);
    try {
      const transformedAnswers = Object.entries(answers).map(
        ([questionId, answer]) => {
          return {
            question_id: questionId,
            answer,
          };
        },
      );
      const { data } = await axiosInstance.post('/survey/answers', {
        survey_answers: transformedAnswers,
      });

      setTimeout(() => {
        setAnswerExists(true)
        setSubmitting(false)
      }, 3000)
    } catch (err: any) {
      alert(err?.message);
    }
  };

  const hasAllQuestionsBeenAnswered = () => {
    for (const question of SurveyQuestionsData) {
      if (!answers[question.id]) return false;
    }
    return true;
  };

  return (
    <Box
      padding="2rem"
      background="url(/space-pyramid.png)"
      backgroundSize="cover"
      justifyContent="center"
      display="flex"
      backgroundColor="#0053412e"
    >
      <Flex
        color={color}
        direction="column"
        gap={2}
        justify="flex-end"
        height="full"
      >
        <Panel topEye bottomEye>
          <Flex mt={2} alignItems="center" gap={4} mb={6}>
            <Text fontSize={60} letterSpacing={0} transform={'scale(0.75, 2)'}>
              04
            </Text>
            <Box h="64px" w="64px">
              <AlgorithmSvg />
            </Box>
          </Flex>
          <Box paddingY={4}>
            <SubHeader letterSpacing="initial">SURVEY</SubHeader>
            <GodCommandsRaphaelText />
          </Box>
          <Text fontFamily="Avenir" color="white" marginBottom={4}>
            Tell us a bit more about you and what you’re looking for in
            Genopets.
          </Text>
          <Flex direction="column" gap={8} maxWidth="650px">
            {!isLoading && <Questions />}
            <Button onClick={onSubmit} color="#ffd800" isLoading={submitting}>
              {answerExists
                ? 'Thank you for completing the Survey!'
                : 'Submit & Complete'}
            </Button>
          </Flex>
        </Panel>
      </Flex>
    </Box>
  );
};

export default Survey;
