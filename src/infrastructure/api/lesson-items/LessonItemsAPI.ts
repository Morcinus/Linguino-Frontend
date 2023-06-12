import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { LessonItem } from "./LessonItems";

export interface LessonItemParams {
  favorite?: boolean;
  searchVocabulary?: string;
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

  async updateLessonItem(lessonItem: Partial<LessonItem>): Promise<LessonItem> {
    return API.put(`${this.URI}/${lessonItem.id}`, lessonItem);
  },
};

export default LessonItemsAPI;
