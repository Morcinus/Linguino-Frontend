import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { UserCourse } from "./Courses";

export interface CourseParams {}

const CoursesAPI = {
  URI: (userId: ID) => `users/${userId}/courses`,

  useCourses(
    userId: ID,
    params: CourseParams = {}
  ): Modify<FetchHook<Array<UserCourse>>, { courses: Array<UserCourse> }> {
    const { data, ...rest } = useAPI<Array<UserCourse>>(
      `${this.URI(userId)}?${parseQueryParams(params)}`
    );
    return { courses: data, ...rest };
  },

  async createCourse(
    userId: ID,
    course: Omit<UserCourse, "id">
  ): Promise<UserCourse> {
    return API.post(`${this.URI(userId)}`, course);
  },

  async updateCourse(
    userId: ID,
    course: Partial<UserCourse>
  ): Promise<UserCourse> {
    return API.put(`${this.URI(userId)}/${course.id}`, course);
  },
};

export default CoursesAPI;
