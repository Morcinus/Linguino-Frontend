import { Course } from "infrastructure/api/courses/Courses";

import { StartingLevel } from "../account-setup/AccountSetup";

export type UserCourse = Pick<
  Course,
  "id" | "language1" | "language2" | "name" | "thumbnailUrl"
>;

export interface EnrollInCourseDTO {
  startingLevel: StartingLevel;
  selectedTopicIds: Array<Id>;
}
