import { UserProfile } from "../Users";

export type Follower = Pick<
  UserProfile,
  "id" | "name" | "username" | "profileImageUrl" | "isFollowed"
>;
