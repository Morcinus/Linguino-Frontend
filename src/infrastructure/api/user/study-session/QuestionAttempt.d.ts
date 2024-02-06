import { AnswerState } from "./Exercises";

export type QuestionAttempt = UserAnswer;

export interface UserAnswer {
  states: Array<AnswerState>;
  answers: Array<string>;
  exerciseId: ID;
}

export interface UserAnswerDTO {
  exerciseId: ID;
  answerRating: number;
}
