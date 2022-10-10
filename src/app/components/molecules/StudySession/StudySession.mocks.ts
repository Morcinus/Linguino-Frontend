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

const speakingSession: IStudySession = {
  session: {
    goal: 3,
    progress: 0,
    type: "SPEAKING",
  },
};

export const mockStudySessionProps = {
  base,
  lesson,
  speakingSession,
};
