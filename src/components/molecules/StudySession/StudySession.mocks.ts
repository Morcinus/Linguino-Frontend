import { IStudySession } from "./StudySession";

const textSession: IStudySession = {
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

const listeningSession: IStudySession = {
  session: {
    goal: 1,
    progress: 0,
    type: "LISTENING",
  },
};

export const mockStudySessionProps = {
  textSession,
  lesson,
  speakingSession,
  listeningSession,
};
