import axios from "axios";

import { CategoryLessons } from "../../domain/models/dtos/api/categoryLessons";
import { Lesson, LessonType } from "../../domain/models/types/lessons";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook, SWRHook } from "./API";
import useAPI from "./hooks/useAPI";

const LessonAPI = {
  URI: "lessons",

  useLessons(lessonType: LessonType): SWRHook<Array<CategoryLessons>> {
    return useAPI(
      `${this.URI}?lessonType=${lessonType}&group=category&sort=+learningOrder`
    );
  },

  async updateLesson(lesson: Lesson): Promise<Lesson> {
    return axios.put(`${this.URI}`, lesson).then((res) => res.data);
  },

  useLesson(lessonId: ID): Modify<FetchHook<Lesson>, { lesson: Lesson }> {
    const { data, ...rest } = useAPI<Lesson>(`${this.URI}/${lessonId}`);
    return { lesson: data, ...rest };
  },
};

export default LessonAPI;
