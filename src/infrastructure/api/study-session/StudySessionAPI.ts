import { Exercise } from "../../../domain/models/types/exercises";
import { QuestionAttempt } from "../../../domain/models/types/questionAttempts";
import { StudySession } from "../../../domain/models/types/studySessions";
import API, { SWRHook } from "../API";
import useAPI from "../hooks/useAPI";
import { Reward } from "./StudySession";

const StudySessionAPI = {
  URI: "study-sessions",

  useStudySession(session: StudySession): SWRHook<Array<Exercise>> {
    const url =
      session.lessonId === undefined
        ? `${this.URI}/${session.type}/lessons/${session.lessonId}?exerciseAmount=${session.goal}`
        : `${this.URI}/${session.type}?exerciseAmount=${session.goal}`;

    return useAPI(url);
  },

  async updateStudySession(
    session: StudySession,
    attempts: Array<QuestionAttempt>
  ): Promise<Reward> {
    const url =
      session.lessonId === undefined
        ? `${this.URI}/${session.type}`
        : `${this.URI}/${session.type}/lessons/${session.lessonId}`;

    return API.post(url, attempts);
  },
};

export default StudySessionAPI;
