import { useTranslation } from "i18n/client";
import { UserProfile } from "infrastructure/api/users/profile/UserProfiles";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Icon,
  Typography,
} from "@mui/material";

export interface IUserProfileCard {
  userProfile: Pick<
    UserProfile,
    | "username"
    | "name"
    | "followers"
    | "following"
    | "level"
    | "profileImageURL"
    | "id"
    | "isFollowed"
  >;
  userId: ID;
  onFollowChange: (isFollowed: boolean) => void;
}

const UserProfileCard: React.FC<IUserProfileCard> = ({
  userProfile,
  userId,
  onFollowChange,
}) => {
  const { t } = useTranslation("cs", "common");
  const router = useRouter();
  return (
    <Card>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 0 }}
      >
        <Box display="flex" gap={2}>
          <Box>
            <Avatar
              src={userProfile.profileImageURL}
              sx={{ width: "104px", height: "104px" }}
            />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {userProfile.name}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {`${t("userProfile.level")}: ${userProfile.level}`}
            </Typography>
            <Typography variant="body2">@{userProfile.username}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", gap: 1 }}>
          <Button
            onClick={() => {
              router.push(`/users/${userId}/followers`);
            }}
          >{`${t("userProfile.followers")} ${userProfile.followers}`}</Button>
          <Button
            onClick={() => {
              router.push(`/users/${userId}/followers?val=following`);
            }}
          >{`${t("userProfile.following")} ${userProfile.following}`}</Button>
          <Button
            variant="contained"
            startIcon={
              userProfile.isFollowed ? (
                <Icon>{icons.unfollow}</Icon>
              ) : (
                <Icon>{icons.follow}</Icon>
              )
            }
            onClick={() => onFollowChange(!userProfile.isFollowed)}
          >
            {userProfile.isFollowed
              ? t("userProfile.userIsFollowing")
              : t("userProfile.userIsNotFollowing")}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
