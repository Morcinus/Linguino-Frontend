import { useTranslation } from "i18n/client";
import { UserProfile } from "infrastructure/api/users/Users";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import IconContainer from "components/atoms/IconContainer/IconContainer";

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
                <IconContainer name={icons.unfollow} />
              ) : (
                <IconContainer name={icons.follow} />
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
