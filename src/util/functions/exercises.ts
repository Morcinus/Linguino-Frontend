import FillTheBlank from "../../components/atoms/FillTheBlank/FillTheBlank";
import TextQuestionAnswer from "../../components/atoms/TextQuestionAnswer/TextQuestionAnswer";
import {
  isFillInBlankQuestionAnswer,
  isTextQuestionAnswer,
} from "../../domain/models/types/guards/questionGuard";
import { QuestionAnswer } from "../../domain/models/types/questionAnswers";

export function getQuestionAnswerComponent(
  questionAnswer: QuestionAnswer
): React.ElementType {
  if (isFillInBlankQuestionAnswer(questionAnswer)) return FillTheBlank;

  if (isTextQuestionAnswer(questionAnswer)) return TextQuestionAnswer;

  return TextQuestionAnswer;
}

export function removeInterpunction(text: string) {
  text = text.replace(/[.,?!]/g, "");
  text = text.replace(/\s{2,}/g, " ");

  return text;
}
