import { Course, CourseTopic } from "infrastructure/api/courses/Courses";

export interface UserCourse extends Partial<Course> {
  selectedTopics?: Array<CourseTopic>;
  courseId?: ID;
}
