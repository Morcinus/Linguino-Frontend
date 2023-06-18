import { useTranslation } from "i18n/client";

import { useState } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";

export interface IOtherSettings {
  animations: boolean;
  reviewPreviousLevels: boolean;
  publicProfile: boolean;

  onAnimationsChange: (value: boolean) => void;
  onReviewPreviousLevelsChange: (value: boolean) => void;
  onPublicProfileChange: (value: boolean) => void;
}

const OtherSettings: React.FC<IOtherSettings> = ({
  animations: animationsProp,
  reviewPreviousLevels: reviewPreviousLevelsProp,
  publicProfile: publicProfileProp,
  onAnimationsChange,
  onReviewPreviousLevelsChange,
  onPublicProfileChange,
}) => {
  const [animations, setAnimations] = useState(animationsProp);
  const [reviewPreviousLevels, setReviewPreviousLevels] = useState(
    reviewPreviousLevelsProp
  );
  const [publicProfile, setPublicProfile] = useState(publicProfileProp);
  const { t } = useTranslation("cs", "form");

  return (
    <Box display="flex" flexDirection="column" gap={2} width="100%">
      <Typography variant="subtitle1">{t("settings.other")}</Typography>
      <Box display="flex" flexDirection="column" gap={2} width="100%">
        <List sx={{ width: "100%", py: 0 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={t("settings.animation")} />
            <Switch
              edge="end"
              onChange={(e) => {
                setAnimations(e.target.checked);
                onAnimationsChange(e.target.checked);
              }}
              checked={animations}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={t("settings.reviewPreviousLevels")} />
            <Switch
              edge="end"
              onChange={(e) => {
                setReviewPreviousLevels(e.target.checked);
                onReviewPreviousLevelsChange(e.target.checked);
              }}
              checked={reviewPreviousLevels}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={t("settings.publicProfile")} />
            <Switch
              edge="end"
              onChange={(e) => {
                setPublicProfile(e.target.checked);
                onPublicProfileChange(e.target.checked);
              }}
              checked={publicProfile}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default OtherSettings;
