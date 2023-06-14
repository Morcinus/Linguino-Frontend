import { action } from "@storybook/addon-actions";

import { IUserProfileCard } from "./UserProfileCard";

const base: IUserProfileCard = {
  userProfile: {
    username: "pepik123",
    name: "Pepa Okurka",
    followers: 12,
    following: 42,
    level: 12,
    id: "12",
    profileImageURL: "https://picsum.photos/id/168/512/512",
    isFollowed: false,
  },
  onFollowChange: action("onFollowChange"),
  userId: "abc",
};

export const mockUserProfileCardProps = {
  base,
};
