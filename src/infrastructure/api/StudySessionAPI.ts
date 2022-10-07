import { Exercise } from "../../domain/models/types/exercises";
import { LessonType } from "../../domain/models/types/lessons";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook, MutationHook } from "./API";
import useAPI from "./useAPI";
import useMutation from "./useMutation";

export default class StudySessionAPI {
  private static readonly URI = "study-sessions";

  public static useStudySession(
    lessonType: LessonType,
    lessonId: ID | undefined = undefined
  ): Modify<FetchHook, { data: Array<Exercise> }> {
    if (lessonId === undefined) return useAPI([`${this.URI}/${lessonType}`]);
    else return useAPI([`${this.URI}/${lessonType}/lessons/${lessonId}`]);
  }

  public static useStudySessionMutation(
    lessonType: LessonType,
    lessonId: ID | undefined = undefined
  ): MutationHook {
    if (lessonId === undefined) return useMutation(`${this.URI}/${lessonType}`);
    else return useMutation(`${this.URI}/${lessonType}/lessons/${lessonId}`);
  }
}
