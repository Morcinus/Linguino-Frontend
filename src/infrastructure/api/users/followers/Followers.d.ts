import { User } from "../Users";

export type Follower = Pick<
  User,
  "id" | "name" | "username" | "isFollowed" | "profileImageURL"
>;
