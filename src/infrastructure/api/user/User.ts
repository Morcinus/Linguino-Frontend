import { Course } from "../courses/Courses";
import { Subscription } from "../users/subscriptions/Subscriptions";

export interface UserPrivate {
  id: ID;
  username: string;
  role: UserRole;
  streak: number;
  balance: number;
  accountInitialized: boolean;
  completedDailyGoal: boolean;
  activeSubscription: Subscription | null;
  selectedCourse: Pick<Course, "id" | "name" | "language1" | "language2">;
  lastViewedStudyMapLevel: number;
}

export type UserRole = "USER" | "PREMIUM_USER";
