import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import { parseQueryParams } from "util/functions/api";

import useAPI from "../../../hooks/useAPI";
import { Exercise } from "./Exercises";
import { UserAnswerDTO } from "./QuestionAttempt";
import { Reward } from "./StudySession";

export interface StudySessionParams {
  lessonId?: ID;
}

const StudySessionAPI = {
  URI: (courseId: ID) => `user/courses/${courseId}/study-session`,

  useStudySession(
    courseId: ID,
    params: StudySessionParams = {}
  ): Modify<FetchHook<Array<Exercise>>, { exercises: Array<Exercise> }> {
    const { data, ...rest } = useAPI<Array<Exercise>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { exercises: data, ...rest };
  },

  async updateStudySession(
    courseId: ID,
    attempts: Array<UserAnswerDTO>
  ): Promise<Reward> {
    return API.post(`${this.URI(courseId)}`, attempts);
  },
};

export default StudySessionAPI;
