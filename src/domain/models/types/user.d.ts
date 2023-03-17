import { Course } from "./course";

export interface User {
  username: string;
  id: ID;
  email: string;
  completedDailyGoal?: boolean;
  streak?: number;
  selectedCourse: Course;
  balance?: number;
  currentSubscriptionId?: ID;
}
