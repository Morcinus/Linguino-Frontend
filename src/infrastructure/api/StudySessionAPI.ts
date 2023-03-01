import axios from "axios";

import { Exercise } from "../../domain/models/types/exercises";
import { QuestionAttempt } from "../../domain/models/types/questionAttempts";
import { StudySession } from "../../domain/models/types/studySessions";
import { SWRHook } from "./API";
import useAPI from "./hooks/useAPI";

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
  ): Promise<Array<QuestionAttempt>> {
    const url =
      session.lessonId === undefined
        ? `${this.URI}/${session.type}`
        : `${this.URI}/${session.type}/lessons/${session.lessonId}`;

    return axios.post(url, attempts);
  },
};

export default StudySessionAPI;
