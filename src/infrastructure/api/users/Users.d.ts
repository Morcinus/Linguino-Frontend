export interface User {
  id: ID;
  username: string;
  email: string;
  dailyGoal?: number;
  completedDailyGoal?: boolean;
  streak?: number;
  selectedCourse: Course;
  balance?: number;
  currentSubscriptionId?: ID;
  accountInitialized?: boolean;
  startingLevel?: ID;
}
