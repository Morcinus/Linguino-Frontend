import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Box, Typography } from "@mui/material";

import {
  AnswerState,
  IExerciseComponent,
  ListeningExercise as ListeningExerciseType,
} from "../../../../../domain/models/types/exercises";
import { isFillInBlankQuestionAnswer } from "../../../../../domain/models/types/guards/questionGuard";
import {
  QuestionAnswer,
  QuestionAttempt,
} from "../../../../../domain/models/types/questionAnswers";
import { concatBlanks } from "../../../../../util/functions/sessions";
import theme from "../../../../styles/theme";
import AudioPlayer from "../../../atoms/AudioPlayer/AudioPlayer";
import FillTheBlank from "../../../atoms/FillTheBlank/FillTheBlank";
import FullWidthButton from "../../../atoms/FullWidthButton/FullWidthButton";

export interface IListeningExercise extends IExerciseComponent {
  exercise: ListeningExerciseType;
}

const ListeningExercise: React.FC<IListeningExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>("NONE");
  const { register, handleSubmit, reset, setValue, getValues } =
    useForm<FieldValues>({
      defaultValues: { answer: "" },
    });
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const onCheckSubmit = () => {
    setDisplayAnswer(true);
    setSubmitted(true);
  };

  function isQuestionCorrect(
    id: ID,
    words: Array<string>,
    index: number,
    blankIndexes?: Array<number>
  ) {
    if (
      concatBlanks(words, index, blankIndexes) ===
      getValues(`${id}-blank-${index}`).trim()
    ) {
      return true;
    } else return false;
  }

  function getQuestionProgress(): Array<QuestionAttempt> {
    let progress: Array<QuestionAttempt> = [];

    exercise.questions.forEach((question, i) => {
      let correct = true;
      let words = question.question.split(" ");

      let lastBlank: number = -2;
      words.forEach((word: string, index: number) => {
        if (question.blankIndexes.includes(index)) {
          if (index === lastBlank + 1) {
            lastBlank = index;
          } else {
            if (
              !isQuestionCorrect(
                question.id,
                words,
                index,
                question.blankIndexes
              )
            )
              correct = false;
          }

          lastBlank = index;
        }
      });

      progress.push({ questionId: question.id, isCorrect: correct });
    });

    return progress;
  }

  const handleContinue = () => {
    setSubmitted(false);
    onContinue(getQuestionProgress(), false);
  };

  useKeypress("Enter", (e: Event) => {
    e.preventDefault();
    if (!submitted) handleSubmit(onCheckSubmit)();
    else handleContinue();
  });

  const renderQuestionAnswer = (questionAnswer: QuestionAnswer) => {
    if (isFillInBlankQuestionAnswer(questionAnswer))
      return (
        <FillTheBlank
          questionAnswer={questionAnswer}
          register={register}
          getValues={getValues}
          displayAnswer={submitted}
        />
      );
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        {exercise.assignmentTitle}
      </Typography>

      <AudioPlayer
        audioLink={exercise.audioURL}
        imageURL={exercise.imageURL}
        playOnMount={true}
      />

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: theme.spacing(3) }}
      >
        {exercise.questions.map((question) => (
          <Box key={question.id}>{renderQuestionAnswer(question)}</Box>
        ))}
      </Box>

      <FullWidthButton
        text={submitted ? t("exercise.continue") : t("exercise.check")}
        onClick={!submitted ? handleSubmit(onCheckSubmit) : handleContinue}
      />
    </>
  );
};

export default ListeningExercise;
