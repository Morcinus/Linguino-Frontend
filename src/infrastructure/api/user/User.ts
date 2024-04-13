import { Course } from "../courses/Courses";
import { Subscription } from "./subscriptions/Subscriptions";

export interface UserPrivate {
  id: Id;
  username: string;
  role: UserRole;
  streak: number;
  balance: number;
  accountInitialized: boolean;
  lastSessionDate: Date | null;
  activeSubscription: Subscription | null;
  selectedCourse: Pick<Course, "id" | "name" | "language1" | "language2">;
  lastViewedStudyMapLevel: number;
}

export type UserRole = "USER" | "PREMIUM_USER";
