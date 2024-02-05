import { AnswerState } from "../../../infrastructure/api/user/study-session/Exercises";

export type QuestionAttempt = UserAnswer;

export interface UserAnswer {
  states: Array<AnswerState>;
  answers: Array<string>;
  questionAnswerId: ID;
}
