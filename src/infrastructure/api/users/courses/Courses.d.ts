import { Course } from "infrastructure/api/courses/Courses";
import { Topic } from "infrastructure/api/courses/topics/Topics";

export interface UserCourse extends Partial<Course> {
  selectedTopics?: Array<Topic>;
  courseId?: ID;
}
