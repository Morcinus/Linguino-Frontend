import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Lesson, LessonType } from "./Lessons";

export interface LessonParams {
  type?: LessonType;
  categoryId?: ID;
  favorite?: boolean;
  author?: ID;
  searchName?: string;
}

const LessonsAPI = {
  URI: "lessons",

  useLesson(lessonId: ID): Modify<FetchHook<Lesson>, { lesson: Lesson }> {
    const { data, ...rest } = useAPI<Lesson>(`${this.URI}/${lessonId}`);
    return { lesson: data, ...rest };
  },

  useLessons(
    params: LessonParams = {}
  ): Modify<FetchHook<Array<Lesson>>, { lessons: Array<Lesson> }> {
    const { data, ...rest } = useAPI<Array<Lesson>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { lessons: data, ...rest };
  },

  async createLesson(lesson: Omit<Lesson, "id">): Promise<Lesson> {
    return API.post(`${this.URI}`, lesson);
  },

  async updateLesson(lesson: Partial<Lesson>): Promise<Lesson> {
    return API.put(`${this.URI}/${lesson.id}`, lesson);
  },

  async deleteLesson(lesson: Lesson): Promise<Lesson> {
    return API.delete(`${this.URI}/${lesson.id}`);
  },
};

export default LessonsAPI;
