import { AnswerState } from "./Exercises";

export type QuestionAttempt = UserAnswer;

export interface UserAnswer {
  states: Array<AnswerState>;
  answers: Array<string>;
  exerciseId: Id;
  lessonItemId: Id;
}

export interface UserAnswerDTO {
  exerciseId: Id;
  answerRating: number;
  lessonItemId: Id;
}
