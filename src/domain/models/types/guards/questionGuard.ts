import {
  FillInBlankQuestionAnswer,
  QuestionAnswer,
  TextQuestionAnswer,
} from "../questionAnswers";

export function isFillInBlankQuestionAnswer(
  questionAnswer: QuestionAnswer
): questionAnswer is FillInBlankQuestionAnswer {
  return (questionAnswer as FillInBlankQuestionAnswer).type === "FILL_IN_BLANK";
}
export function isTextQuestionAnswer(
  questionAnswer: QuestionAnswer
): questionAnswer is TextQuestionAnswer {
  return (questionAnswer as TextQuestionAnswer).type === "TEXT";
}
