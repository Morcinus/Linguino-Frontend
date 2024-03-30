import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { LessonItem, LessonItemSummary } from "./LessonItems";

export interface LessonItemParams {
  favorite?: boolean;
  searchVocabulary?: string;
}

const LessonItemsAPI = {
  URI: (courseId: Id) => `user/courses/${courseId}/lesson-items`,

  useLessonItem(
    courseId: Id,
    id: Id
  ): Modify<FetchHook<LessonItem>, { lessonItem: LessonItem }> {
    const { data, ...rest } = useAPI<LessonItem>(`${this.URI(courseId)}/${id}`);
    return { lessonItem: data, ...rest };
  },

  useLessonItems(
    courseId: Id,
    params: LessonItemParams = {}
  ): Modify<
    FetchHook<Array<LessonItemSummary>>,
    { lessonItems: Array<LessonItemSummary> }
  > {
    const { data, ...rest } = useAPI<Array<LessonItemSummary>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { lessonItems: data, ...rest };
  },

  async updateLessonItem(
    courseId: Id,
    lessonItem: Partial<LessonItem>
  ): Promise<LessonItem> {
    return API.patch(`${this.URI(courseId)}/${lessonItem.id}`, lessonItem);
  },
};

export default LessonItemsAPI;
