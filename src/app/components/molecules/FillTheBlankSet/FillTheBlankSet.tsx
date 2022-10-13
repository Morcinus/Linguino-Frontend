import { useState } from "react";
import { useForm } from "react-hook-form";

import { useTranslation } from "next-i18next";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import {
  FillInBlankQuestion,
  QuestionAttempt,
} from "../../../../domain/models/types/questions";
import { concatBlanks } from "../../../../util/functions/sessions";
import FillTheBlank from "../../atoms/FillTheBlank/FillTheBlank";
import styles from "./FillTheBlankSet.module.css";

export interface IFillTheBlankSet {
  questions: Array<FillInBlankQuestion>;
  onContinue: (attempts: Array<QuestionAttempt>) => void;
}

const FillTheBlankSet: React.FC<IFillTheBlankSet> = ({
  questions,
  onContinue,
}) => {
  const { t } = useTranslation("common");
  const { register, handleSubmit, reset, setValue, getValues } = useForm();
  const [submitted, setSubmitted] = useState(false);
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

    questions.forEach((question, i) => {
      let correct = true;
      let words = question.question.split(" ");

      let lastBlank: number = -2;
      words.forEach((word, index) => {
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
    onContinue(getQuestionProgress());
  };

  return (
    <div className={styles.container}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {questions.map((question) => (
          <Box key={question.id}>
            <FillTheBlank
              blankIndexes={question.blankIndexes}
              sentence={question.question}
              register={register}
              getValues={getValues}
              displayAnswer={displayAnswer}
              id={question.id}
            />
          </Box>
        ))}
      </Box>

      <Button
        onClick={!submitted ? handleSubmit(onCheckSubmit) : handleContinue}
        variant="contained"
      >
        {submitted ? t("exercise.continue") : t("exercise.check")}
      </Button>
    </div>
  );
};

export default FillTheBlankSet;
