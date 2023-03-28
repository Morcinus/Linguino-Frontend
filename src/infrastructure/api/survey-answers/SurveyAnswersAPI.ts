import API from "infrastructure/api/API";

import { SurveyAnswer } from "./SurveyAnswers";

export interface SurveyAnswerParams {}

const SurveyAnswersAPI = {
  URI: "survey-answers",

  async createSurveyAnswer(
    surveyAnswer: Omit<SurveyAnswer, "id">
  ): Promise<SurveyAnswer> {
    return API.post(`${this.URI}`, surveyAnswer);
  },
};

export default SurveyAnswersAPI;
