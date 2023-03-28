import { Modify } from "domain/models/utils/modify";
import { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { Course } from "./Courses";

export interface CourseParams {
  languageL1?: string;
}

const CoursesAPI = {
  URI: "courses",

  useCourse(id: ID): Modify<FetchHook<Course>, { course: Course }> {
    const { data, ...rest } = useAPI<Course>(`${this.URI}/${id}`);
    return { course: data, ...rest };
  },

  useCourses(
    params: CourseParams = {}
  ): Modify<FetchHook<Array<Course>>, { courses: Array<Course> }> {
    const { data, ...rest } = useAPI<Array<Course>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { courses: data, ...rest };
  },
};

export default CoursesAPI;
