import { IStudySession } from "./StudySession";

const base: IStudySession = {
  sessionInfo: {
    goal: 5,
    progress: 0,
    lessonType: "VOCABULARY",
  },
};

const lesson: IStudySession = {
  sessionInfo: {
    goal: 5,
    progress: 0,
    lessonType: "VOCABULARY",
  },
  lessonId: "kdfmsakdfoako",
};

export const mockStudySessionProps = {
  base,
  lesson,
};
