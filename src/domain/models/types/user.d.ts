export interface User {
  username: string;
  email: string;
  completedDailyGoal?: boolean;
  streak?: number;
}
