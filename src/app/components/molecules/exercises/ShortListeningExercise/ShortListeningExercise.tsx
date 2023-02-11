import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Typography } from "@mui/material";

import {
  AnswerState,
  IExerciseComponent,
  ShortListeningExercise as ShortListeningExerciseType,
} from "../../../../../domain/models/types/exercises";
import { useFocus } from "../../../../hooks/useFocus";
import CharacterButton from "../../../atoms/CharacterButton/CharacterButton";
import CorrectAnswerBox from "../../../atoms/CorrectAnswerBox/CorrectAnswerBox";
import FullWidthButton from "../../../atoms/FullWidthButton/FullWidthButton";
import ListenButton from "../../../atoms/ListenButton/ListenButton";
import TextAnswer from "../../../atoms/TextAnswer/TextAnswer";

export interface IShortListeningExercise extends IExerciseComponent {
  exercise: ShortListeningExerciseType;
}

const ShortListeningExercise: React.FC<IShortListeningExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>("NONE");
  const [inputRef, setInputFocus] = useFocus();
  const { register, handleSubmit, reset, setValue, getValues } = useForm<{
    answer: string;
  }>({
    defaultValues: { answer: "" },
  });

  const onCheckSubmit = (data: { answer: string }) => {
    setSubmitted(true);
    if (data.answer.trim() === exercise.questions[0].answer) {
      setAnswerState("RIGHT");
    } else {
      setAnswerState("WRONG");
    }
  };

  const handleContinue = () => {
    setSubmitted(false);
    setAnswerState("NONE");
    onContinue(
      [
        {
          questionId: exercise.questions[0].id,
          isCorrect: answerState === "RIGHT" ? true : false,
        },
      ],
      answerState === "RIGHT" ? false : true
    );
    reset({ answer: "" });
  };

  useEffect(() => {
    setInputFocus();
  });

  useKeypress("Enter", (e: Event) => {
    e.preventDefault();
    if (!submitted) handleSubmit(onCheckSubmit)();
    else handleContinue();
  });

  const handleAddCharacter = () => {
    setValue("answer", getValues().answer + "'");
    setInputFocus();
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        {exercise.assignmentTitle}
      </Typography>

      <ListenButton
        audioLink={exercise.questions[0].questionAudioLink}
        displayProgress={true}
        playOnMount={true}
      />

      <TextAnswer
        inputRef={inputRef}
        variant="long"
        disabled={submitted}
        registration={register("answer", {
          required: true,
        })}
        answerState={answerState}
        enableAudioInput={false}
      />

      <CharacterButton
        onClick={handleAddCharacter}
        character="'"
        disabled={answerState !== "NONE"}
      />

      <CorrectAnswerBox
        state={answerState}
        answer={getValues().answer}
        correctAnswer={exercise.questions[0].answer}
      />

      <FullWidthButton
        text={submitted ? t("exercise.continue") : t("exercise.check")}
        onClick={!submitted ? handleSubmit(onCheckSubmit) : handleContinue}
        variant={
          answerState === "RIGHT"
            ? "right"
            : answerState === "WRONG"
            ? "wrong"
            : undefined
        }
      />
    </>
  );
};

export default ShortListeningExercise;
