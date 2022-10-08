import { IStudySession } from "./StudySession";

const base: IStudySession = {
  session: {
    goal: 5,
    progress: 0,
    type: "VOCABULARY",
  },
};

const lesson: IStudySession = {
  session: {
    goal: 5,
    progress: 0,
    type: "VOCABULARY",
    lessonId: "kdfmsakdfoako",
  },
};

export const mockStudySessionProps = {
  base,
  lesson,
};
