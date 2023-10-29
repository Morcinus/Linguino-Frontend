import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import UserFollowingAPI from "infrastructure/api/user/following/UserFollowingAPI";
import { Follower } from "infrastructure/api/users/followers/Followers";
import FollowersAPI from "infrastructure/api/users/followers/FollowersAPI";
import { Following } from "infrastructure/api/users/following/Following";
import FollowingAPI from "infrastructure/api/users/following/FollowingAPI";

import { useState } from "react";

import { Box, Typography } from "@mui/material";

import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";
import UsersList from "components/atoms/lists/UsersList/UsersList";

export interface IFollowersOverview {
  userId: ID;
  initialState?: "followers" | "following";
}

const FollowersOverview: React.FC<IFollowersOverview> = ({
  userId,
  initialState,
}) => {
  const [value, setValue] = useState<string>(initialState || "followers");
  const { followers, mutate: mutateFollowers } =
    FollowersAPI.useFollowers(userId);
  const { following, mutate: mutateFollowing } =
    FollowingAPI.useFollowing(userId);
  const { t } = useTranslation("cs", "common");

  const updateFollower = (itemId: ID, isFollowed: boolean) => {
    mutateFollowers(
      async () => {
        if (isFollowed) {
          await UserFollowingAPI.followUser(itemId);
        } else {
          await UserFollowingAPI.unfollowUser(itemId);
        }

        return followers.map((item) => {
          if (item.id === itemId) return { ...item, isFollowed };
          else return item;
        });
      },
      optimisticMutationOption<Array<Follower>>(
        followers.map((item) => {
          if (item.id === itemId) return { ...item, isFollowed };
          else return item;
        })
      )
    );
  };

  const updateFollowing = (itemId: ID, isFollowed: boolean) => {
    mutateFollowing(
      async () => {
        if (isFollowed) {
          await UserFollowingAPI.followUser(itemId);
        } else {
          await UserFollowingAPI.unfollowUser(itemId);
        }

        return following.map((item) => {
          if (item.id === itemId) return { ...item, isFollowed };
          else return item;
        });
      },
      optimisticMutationOption<Array<Following>>(
        following.map((item) => {
          if (item.id === itemId) return { ...item, isFollowed };
          else return item;
        })
      )
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="subtitle1">{t("categories")}</Typography>
      <TabBarPanel
        onChange={(value) => setValue(value)}
        tabs={[
          {
            id: "followers",
            name: t("navigation.followers"),
          },
          {
            id: "following",
            name: t("navigation.following"),
          },
        ]}
        panelContent={
          value === "followers"
            ? followers && (
                <UsersList
                  users={followers}
                  onFollow={(userId) => updateFollower(userId, true)}
                  onUnfollow={(userId) => updateFollower(userId, false)}
                />
              )
            : value === "following"
            ? following && (
                <UsersList
                  users={following}
                  onFollow={(userId) => updateFollowing(userId, true)}
                  onUnfollow={(userId) => updateFollowing(userId, false)}
                />
              )
            : undefined
        }
        value={value}
      />
    </Box>
  );
};

export default FollowersOverview;
