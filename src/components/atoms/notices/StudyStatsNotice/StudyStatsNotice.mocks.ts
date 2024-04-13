import { IStudyStatsNotice } from "./StudyStatsNotice";

const base: IStudyStatsNotice = {
  notice: {
    id: "06464452",
    type: "STUDY_STATS",
    stats: {
      rightAnswers: 10,
      wrongAnswers: 5,
    },
  },
};

export const mockStudyStatsNoticeProps = {
  base,
};
