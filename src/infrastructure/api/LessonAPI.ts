import axios from "axios";

import { CategoryLessons } from "../../domain/models/dtos/api/categoryLessons";
import { Lesson, LessonType } from "../../domain/models/types/lessons";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook, SWRHook } from "./API";
import useAPI from "./hooks/useAPI";

export default class LessonAPI {
  private static readonly URI = "lessons";

  public static useLessons(
    lessonType: LessonType
  ): Modify<SWRHook, { data: Array<CategoryLessons> }> {
    return useAPI(
      `${this.URI}?lessonType=${lessonType}&group=category&sort=+learningOrder`
    );
  }

  public static async updateLesson(lesson: Lesson): Promise<Lesson> {
    return axios.put(`${this.URI}`, lesson).then((res) => res.data);
  }

  public static useLesson(lessonId: ID): Modify<FetchHook, { lesson: Lesson }> {
    const { data, ...rest } = useAPI(`${this.URI}/${lessonId}`);
    return { lesson: data, ...rest };
  }
}
