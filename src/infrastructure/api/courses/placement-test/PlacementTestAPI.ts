import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import { parseQueryParams } from "util/functions/api";

import { Exercise } from "../../../../domain/models/types/exercises";
import { QuestionAttempt } from "../../../../domain/models/types/questionAttempts";
import useAPI from "../../hooks/useAPI";
import { PlacementTestResult } from "./PlacementTest";

export interface PlacementTestParams {}

const PlacementTestAPI = {
  URI: (courseId: ID) => `courses/${courseId}/placement-test`,

  usePlacementTest(
    courseId: ID,
    params: PlacementTestParams = {}
  ): Modify<FetchHook<Array<Exercise>>, { exercises: Array<Exercise> }> {
    const { data, ...rest } = useAPI<Array<Exercise>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { exercises: data, ...rest };
  },

  async updatePlacementTest(
    courseId: ID,
    attempts: Array<QuestionAttempt>
  ): Promise<PlacementTestResult> {
    return API.post(`${this.URI(courseId)}`, attempts);
  },
};

export default PlacementTestAPI;
