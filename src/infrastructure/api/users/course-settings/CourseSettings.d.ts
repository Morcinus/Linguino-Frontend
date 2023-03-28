import { CourseTopic } from "infrastructure/api/courses/Courses";

export interface CourseSetting {
  id: ID;
  selectedTopics: Array<CourseTopic>;
}
