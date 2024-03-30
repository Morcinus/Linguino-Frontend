import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { LanguageLevel } from "components/molecules/forms/SelectLevelForm/config";

import {
  Lesson,
  LessonCreateUpdateDTO,
  LessonType,
  LessonUpdateDTO,
} from "./Lessons";

export interface LessonParams {
  type?: LessonType;
  level?: LanguageLevel;
  favorite?: boolean;
  custom?: boolean;
  searchName?: string;
}

const LessonsAPI = {
  URI: (courseId: Id) => `user/courses/${courseId}/lessons`,

  useLesson(
    courseId: Id,
    lessonId: Id
  ): Modify<FetchHook<Lesson>, { lesson: Lesson }> {
    const { data, ...rest } = useAPI<Lesson>(
      `${this.URI(courseId)}/${lessonId}`
    );
    return { lesson: data, ...rest };
  },

  useLessons(
    courseId: Id,
    params: LessonParams = {}
  ): Modify<FetchHook<Array<Lesson>>, { lessons: Array<Lesson> }> {
    const { data, ...rest } = useAPI<Array<Lesson>>(
      `${this.URI(courseId)}?${parseQueryParams(params)}`
    );
    return { lessons: data, ...rest };
  },

  async createLesson(
    courseId: Id,
    lesson: Omit<LessonCreateUpdateDTO, "id">
  ): Promise<void> {
    return API.post(`${this.URI(courseId)}`, lesson);
  },

  async updateLesson(courseId: Id, lesson: LessonUpdateDTO): Promise<Lesson> {
    return API.patch(`${this.URI(courseId)}/${lesson.id}`, lesson);
  },

  async deleteLesson(courseId: Id, lesson: Lesson): Promise<Lesson> {
    return API.delete(`${this.URI(courseId)}/${lesson.id}`);
  },
};

export default LessonsAPI;
