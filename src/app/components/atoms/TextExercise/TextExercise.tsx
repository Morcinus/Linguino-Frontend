import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Typography } from "@mui/material";

import {
  AnswerState,
  IExerciseComponent,
  TextExercise as TextExerciseType,
} from "../../../../domain/models/types/exercises";
import { useFocus } from "../../../hooks/useFocus";
import CharacterButton from "../CharacterButton/CharacterButton";
import CorrectAnswerBox from "../CorrectAnswerBox/CorrectAnswerBox";
import FullWidthButton from "../FullWidthButton/FullWidthButton";
import ImageCard from "../ImageCard/ImageCard";
import TextAnswer from "../TextAnswer/TextAnswer";

export interface ITextExercise extends IExerciseComponent {
  variant: "short" | "long";
  exercise: TextExerciseType;
}

const TextExercise: React.FC<ITextExercise> = ({
  exercise,
  onContinue,
  variant,
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

  const handleAudioInputChange = (text: string) => {
    setValue("answer", text);
    setInputFocus();
  };

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        {exercise.assignmentTitle}
      </Typography>

      <ImageCard
        url={`${process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL} + ${exercise.id}`}
      />

      <Typography variant="subtitle1">
        {exercise.questions[0].question}
      </Typography>

      <TextAnswer
        inputRef={inputRef}
        variant={variant}
        disabled={submitted}
        registration={register("answer", {
          required: true,
        })}
        answerState={answerState}
        enableAudioInput={true}
        onAudioInputChange={handleAudioInputChange}
      />

      <CharacterButton
        onClick={handleAddCharacter}
        character="'"
        disabled={answerState !== "NONE"}
      />

      <CorrectAnswerBox
        state={answerState}
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

export default TextExercise;
