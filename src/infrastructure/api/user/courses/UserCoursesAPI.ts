import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { AddCourseDTO, UserCourse } from "./UserCourses";

export interface CourseParams {}

const UserCoursesAPI = {
  URI: "user/courses",

  useUserCourses(
    params: CourseParams = {}
  ): Modify<FetchHook<Array<UserCourse>>, { courses: Array<UserCourse> }> {
    const { data, ...rest } = useAPI<Array<UserCourse>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { courses: data, ...rest };
  },

  async addUserCourse(course: AddCourseDTO): Promise<void> {
    return API.post(`${this.URI}`, course);
  },

  async selectCourse(courseId: ID): Promise<void> {
    return API.put(`${this.URI}/${courseId}/select-course`, {});
  },
};

export default UserCoursesAPI;
