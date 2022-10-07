export interface User {
  username: string;
  id: ID;
  email: string;
  completedDailyGoal?: boolean;
  streak?: number;
}
