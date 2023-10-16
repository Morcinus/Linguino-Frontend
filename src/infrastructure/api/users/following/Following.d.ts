import { User } from "../Users";

export type Following = Pick<
  User,
  "id" | "name" | "username" | "isFollowed" | "profileImageURL"
>;
