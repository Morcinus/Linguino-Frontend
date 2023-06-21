export interface SurveyAnswer {
  id?: ID;
  answer: string | number;
  userId: ID;
  surveyId: ID;
}
