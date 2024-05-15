import { IAudioQuestionAnswer } from "./AudioQuestionAnswer";

const base: IAudioQuestionAnswer = {
  questionAnswer: {
    id: "abc",
    question: "Lorem ipsum?",
    answer: "Karel snědl bramboru.",
    type: "AUDIO",
    lessonItemId: "abc",
  },
};

export const mockAudioQuestionAnswerProps = {
  base,
};
