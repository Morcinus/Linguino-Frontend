export interface Settings {
  username: string;
  name: string;
  email: string;
  dailyGoal: DailyGoal;
}

export type DailyGoal = number;
