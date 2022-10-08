import { Exercise } from "../../domain/models/types/exercises";
import { StudySession } from "../../domain/models/types/studySessions";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook, MutationHook } from "./API";
import useAPI from "./useAPI";
import useMutation from "./useMutation";

export default class StudySessionAPI {
  private static readonly URI = "study-sessions";

  public static useStudySession(
    session: StudySession
  ): Modify<FetchHook, { data: Array<Exercise> }> {
    if (session.lessonId === undefined)
      return useAPI(
        `${this.URI}/${session.type}?exerciseAmount=${session.goal}`
      );
    else
      return useAPI([
        `${this.URI}/${session.type}/lessons/${session.lessonId}?exerciseAmount=${session.goal}`,
      ]);
  }

  public static useStudySessionMutation(session: StudySession): MutationHook {
    if (session.lessonId === undefined)
      return useMutation(`${this.URI}/${session.type}`);
    else
      return useMutation(
        `${this.URI}/${session.type}/lessons/${session.lessonId}`
      );
  }
}