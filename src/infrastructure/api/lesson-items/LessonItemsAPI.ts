import { Modify } from "domain/models/utils/modify";
import { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { LessonItem } from "./LessonItems";

export interface LessonItemParams {
  favorite?: boolean;
}

const LessonItemsAPI = {
  URI: "lesson-items",

  useLessonItem(
    id: ID
  ): Modify<FetchHook<LessonItem>, { lessonItem: LessonItem }> {
    const { data, ...rest } = useAPI<LessonItem>(`${this.URI}/${id}`);
    return { lessonItem: data, ...rest };
  },

  useLessonItems(
    params: LessonItemParams = {}
  ): Modify<FetchHook<Array<LessonItem>>, { lessonItems: Array<LessonItem> }> {
    const { data, ...rest } = useAPI<Array<LessonItem>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { lessonItems: data, ...rest };
  },
};

export default LessonItemsAPI;