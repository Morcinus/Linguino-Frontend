// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import AchievementsAPI from "infrastructure/api/achievements/AchievementsAPI";
import UserProfilesAPI from "infrastructure/api/users/profile/UserProfilesAPI";

import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Popup, { IPopup } from "components/atoms/Popup/Popup";
import ProgressCard from "components/atoms/cards/ProgressCard/ProgressCard";
import UserProfileCard from "components/atoms/cards/UserProfileCard/UserProfileCard";
import UserStatsCard from "components/atoms/cards/UserStatsCard/UserStatsCard";

export interface IUsersPage {
  params: {
    userId: string;
  };
}

const UsersPage: React.FC<IUsersPage> = ({ params }) => {
  const { userProfile, mutate } = UserProfilesAPI.useUserProfile(params.userId);
  const { achievements } = AchievementsAPI.useAchievements({
    userId: params.userId,
  });
  const [popup, setPopup] = useState<IPopup | null>(null);
  const { t } = useTranslation("cs", "common");

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {userProfile && (
        <UserProfileCard
          userProfile={userProfile}
          userId={params.userId}
          onFollowChange={(isFollowed) => {
            mutate(
              UserProfilesAPI.updateUserProfile(params.userId, { isFollowed }),
              optimisticMutationOption({ ...userProfile, isFollowed })
            );
          }}
        />
      )}

      <Typography variant="subtitle1">{t("userProfile.stats")}</Typography>
      {userProfile && (
        <UserStatsCard
          learningStats={userProfile.learningStats}
          streak={userProfile.streak}
        />
      )}

      {popup && <Popup {...popup} open={true} onClose={() => setPopup(null)} />}
      <Typography variant="subtitle1">
        {t("achievements.achievements")}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {achievements &&
          achievements.map((achievement) => {
            return (
              <ProgressCard
                key={achievement.id}
                header={achievement.title}
                subheader={achievement.description}
                imageURL={achievement.imageURL}
                onClick={() => {
                  setPopup({
                    displayCloseButton: true,
                    subheader: achievement.title,
                    imageURL: achievement.imageURL,
                    text: achievement.description,
                  });
                }}
                cardHighlight={
                  achievement.progress === 100 ? "achieved" : undefined
                }
                variant="small"
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default UsersPage;