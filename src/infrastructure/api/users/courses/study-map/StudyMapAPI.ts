import { Modify } from "domain/models/utils/modify";
import { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { StudyMap } from "./StudyMap";

export interface StudyMapParams {
  level?: number;
  page?: number;
}

const StudyMapAPI = {
  URI: (userId: ID, courseId: ID) =>
    `users/${userId}/courses/${courseId}/study-map`,

  useStudyMap(
    userId: ID,
    courseId: ID,
    params: StudyMapParams
  ): Modify<FetchHook<StudyMap>, { studyMap: StudyMap }> {
    const { data, ...rest } = useAPI<StudyMap>(
      `${this.URI(userId, courseId)}?${parseQueryParams(params)}`
    );
    return { studyMap: data, ...rest };
  },
};

export default StudyMapAPI;
