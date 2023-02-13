import { FillInBlankQuestionAnswer, QuestionAnswer } from "../questionAnswers";

export function isFillInBlankQuestionAnswer(
  questionAnswer: QuestionAnswer
): questionAnswer is FillInBlankQuestionAnswer {
  return (questionAnswer as FillInBlankQuestionAnswer).type === "FILL_IN_BLANK";
}
