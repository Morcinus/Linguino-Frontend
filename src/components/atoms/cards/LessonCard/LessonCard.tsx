import { useTranslation } from "i18n/client";
import { Lesson } from "infrastructure/api/lessons/Lessons";

import { useState } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import FavoriteButton from "../../FavoriteButton/FavoriteButton";
import VisibilityButton from "../../VisibilityButton/VisibilityButton";
import YouTubeVideoEmbed from "../../YouTubeVideoEmbed/YouTubeVideoEmbed";

export interface ILessonCard {
  lesson: Lesson;
  onFavoriteChange: (value: boolean) => void;
  onVisibleChange: (value: boolean) => void;
}

const LessonCard: React.FC<ILessonCard> = ({
  lesson,
  onVisibleChange,
  onFavoriteChange,
}) => {
  const maxDescriptionLength = 250;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("cs", "common");

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ flexGrow: 1 }} variant="subtitle1">
              {lesson?.name}
            </Typography>
            <VisibilityButton
              active={lesson?.visible}
              onClick={() => onVisibleChange(!lesson.visible)}
            />
            <FavoriteButton
              active={lesson?.favorite}
              onClick={() => onFavoriteChange(!lesson.favorite)}
            />
          </Box>
          <Divider />
          <YouTubeVideoEmbed videoId={lesson?.videoId} />
          <Typography>
            {open
              ? lesson?.description
              : `${lesson?.description?.slice(0, maxDescriptionLength)}...`}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => setOpen(!open)}>
              {open ? <>{t("other.readLess")}</> : <>{t("other.readMore")}</>}
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LessonCard;