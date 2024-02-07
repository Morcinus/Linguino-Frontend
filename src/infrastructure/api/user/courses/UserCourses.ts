import { Course } from "infrastructure/api/courses/Courses";

import { StartingLevel } from "../account-setup/AccountSetup";

export type UserCourse = Pick<
  Course,
  "id" | "language1" | "language2" | "name" | "thumbnailURL"
>;

export interface AddCourseDTO {
  id: ID;
  startingLevel: StartingLevel;
  selectedTopicIds: Array<ID>;
}
