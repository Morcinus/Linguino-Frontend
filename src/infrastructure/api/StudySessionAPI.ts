import { Exercise } from "../../domain/models/types/exercises";
import { LessonType } from "../../domain/models/types/lessons";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook, MutationHook } from "./API";
import useAPI from "./useAPI";
import useMutation from "./useMutation";

export default class StudySessionAPI {
  private static readonly URI = "study-sessions";

  public static useStudySession(
    sessionType: LessonType,
    lessonId: ID | undefined = undefined
  ): Modify<FetchHook, { data: Array<Exercise> }> {
    if (lessonId === undefined) return useAPI([`${this.URI}/${sessionType}`]);
    else return useAPI([`${this.URI}/${sessionType}/lessons/${lessonId}`]);
  }

  public static useStudySessionMutation(
    sessionType: LessonType,
    lessonId: ID | undefined = undefined
  ): MutationHook {
    if (lessonId === undefined)
      return useMutation(`${this.URI}/${sessionType}`);
    else return useMutation(`${this.URI}/${sessionType}/lessons/${lessonId}`);
  }
}
