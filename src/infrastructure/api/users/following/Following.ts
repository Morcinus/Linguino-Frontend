import { UserProfile } from "../Users";

export type Following = Pick<
  UserProfile,
  "id" | "name" | "username" | "profileImageURL" | "isFollowed"
>;
