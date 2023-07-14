import { AnswerState } from "./exercises";

export type QuestionAttempt = UserAnswer;

export interface UserAnswer {
  states: Array<AnswerState>;
  answers: Array<string>;
  questionAnswerId: ID;
}
