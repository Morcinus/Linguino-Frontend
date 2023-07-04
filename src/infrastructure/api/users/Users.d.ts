import { Course } from "../courses/Courses";

export interface User {
  id: ID;
  username: string;
  email: string;
  dailyGoal?: number;
  streak: number;
  completedDailyGoal?: boolean;
  selectedCourse: Course;
  lastViewedStudyMapLevel: number;
  balance?: number;
  currentSubscriptionId?: ID;
  accountInitialized?: boolean;
  startingLevel?: ID;
}
