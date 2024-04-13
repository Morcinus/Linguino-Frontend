import API from "infrastructure/api/API";

import { SurveyAnswer } from "./SurveyAnswers";

export interface SurveyAnswerParams {}

const SurveyAnswersAPI = {
  URI: "user/survey-answers",

  async createSurveyAnswer(surveyAnswer: SurveyAnswer): Promise<void> {
    return API.post(`${this.URI}`, surveyAnswer);
  },
};

export default SurveyAnswersAPI;
