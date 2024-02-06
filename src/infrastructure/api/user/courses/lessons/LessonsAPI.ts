import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { LanguageLevel } from "components/molecules/forms/SelectLevelForm/config";

import { Lesson, LessonCreateUpdateDTO, LessonType } from "./Lessons";

export interface LessonParams {
  type?: LessonType;
  level?: LanguageLevel;
  favorite?: boolean;
  custom?: boolean;
  searchName?: string;
}

const LessonsAPI = {
  URI: (courseId: ID) => `user/courses/${courseId}/lessons`,

  useLesson(
    courseId: ID,
    lessonId: ID
  ): Modify<FetchHook<Lesson>, { lesson: Lesson }> {
    const { data, ...rest } = useAPI<Lesson>(
      `${this.URI(courseId)}/${lessonId}`
    );
    return { lesson: data, ...rest };
  },

  useLessons(
    courseId: ID,
    params: LessonParams = {}
  ): Modify<FetchHook<Array<Lesson>>, { lessons: Array<Lesson> }> {
    const { data, ...rest } = useAPI<Array<Lesson>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { lessons: data, ...rest };
  },

  async createLesson(
    courseId: ID,
    lesson: Omit<LessonCreateUpdateDTO, "id">
  ): Promise<void> {
    return API.post(`${this.URI(courseId)}`, lesson);
  },

  async updateLesson(
    courseId: ID,
    lesson: LessonCreateUpdateDTO
  ): Promise<Lesson> {
    return API.patch(`${this.URI(courseId)}/${lesson.id}`, lesson);
  },

  async deleteLesson(courseId: ID, lesson: Lesson): Promise<Lesson> {
    return API.delete(`${this.URI(courseId)}/${lesson.id}`);
  },
};

export default LessonsAPI;