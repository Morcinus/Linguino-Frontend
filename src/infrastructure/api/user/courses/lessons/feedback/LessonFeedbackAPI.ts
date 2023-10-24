import API from "infrastructure/api/API";

import { Feedback } from "./LessonFeedback";

export interface LessonFeedbackParams {}

const LessonFeedbackAPI = {
  URI: (courseId: ID, lessonId: ID) =>
    `user/courses/${courseId}/lessons/${lessonId}/feedback`,

  async updateLessonFeedback(
    courseId: ID,
    lessonId: ID,
    feedback: Partial<Feedback>
  ): Promise<void> {
    return API.put(`${this.URI(courseId, lessonId)}`, feedback);
  },
};

export default LessonFeedbackAPI;
