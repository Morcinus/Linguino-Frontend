import { IRatingSurveyNotice } from "./RatingSurveyNotice";

const base: IRatingSurveyNotice = {
  notice: {
    id: "0646445",
    surveyId: "897898",
    type: "RATING_SURVEY",
    question:
      "Jaká je pravděpodobnost, že byste aplikaci doporučili přátelům/kolegům?",
    answerLabel1: "Nízká",
    answerLabel2: "Vysoká",
    maxPoints: 10,
  },
};

export const mockRatingSurveyNoticeProps = {
  base,
};
