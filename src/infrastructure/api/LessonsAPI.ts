import axios from "axios";
import { parseQueryParams } from "util/functions/api";

import { Lesson, LessonType } from "../../domain/models/types/lessons";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./hooks/useAPI";

export interface LessonsParams {
  type?: LessonType;
  categoryId?: ID;
}

const LessonsAPI = {
  URI: "lessons",

  useLessons(
    params: LessonsParams
  ): Modify<FetchHook<Array<Lesson>>, { lessons: Array<Lesson> }> {
    const { data, ...rest } = useAPI<Array<Lesson>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { lessons: data, ...rest };
  },

  async updateLesson(lesson: Lesson): Promise<Lesson> {
    return axios.put(`${this.URI}`, lesson).then((res) => res.data);
  },

  useLesson(lessonId: ID): Modify<FetchHook<Lesson>, { lesson: Lesson }> {
    const { data, ...rest } = useAPI<Lesson>(`${this.URI}/${lessonId}`);
    return { lesson: data, ...rest };
  },
};

export default LessonsAPI;
