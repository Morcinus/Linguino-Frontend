export interface User {
  id: ID;
  username: string;
  email: string;
  dailyGoal?: number;
  completedDailyGoal?: boolean;
  selectedCourse: Course;
  balance?: number;
  currentSubscriptionId?: ID;
  accountInitialized?: boolean;
  startingLevel?: ID;
}
