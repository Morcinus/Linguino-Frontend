import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import { parseQueryParams } from "util/functions/api";

import { Exercise } from "../../../../domain/models/types/exercises";
import { QuestionAttempt } from "../../../../domain/models/types/questionAttempts";
import useAPI from "../../hooks/useAPI";
import { Reward } from "./StudySession";

export interface StudySessionParams {
  lessonId?: ID;
}

const StudySessionAPI = {
  URI: "user/study-session",

  useStudySession(
    params: StudySessionParams = {}
  ): Modify<FetchHook<Array<Exercise>>, { exercises: Array<Exercise> }> {
    const { data, ...rest } = useAPI<Array<Exercise>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { exercises: data, ...rest };
  },

  async updateStudySession(attempts: Array<QuestionAttempt>): Promise<Reward> {
    return API.post(`${this.URI}`, attempts);
  },
};

export default StudySessionAPI;
