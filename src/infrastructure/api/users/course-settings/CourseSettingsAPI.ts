import API from "infrastructure/api/API";

import { CourseSetting } from "./CourseSettings";

export interface CourseSettingParams {}

const CourseSettingsAPI = {
  URI: (userId: ID) => `users/${userId}/course-settings`,

  async createCourseSetting(
    userId: ID,
    courseSetting: Omit<CourseSetting, "id">
  ): Promise<CourseSetting> {
    return API.post(`${this.URI(userId)}`, courseSetting);
  },
};

export default CourseSettingsAPI;
