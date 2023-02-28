import { useState } from "react";

import { useTranslation } from "next-i18next";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { optimisticMutationOption } from "../../../../infrastructure/api/API";
import LessonAPI from "../../../../infrastructure/api/LessonAPI";
import FavoriteButton from "../../atoms/FavoriteButton/FavoriteButton";
import VisibilityButton from "../../atoms/VisibilityButton/VisibilityButton";
import YouTubeVideoEmbed from "../../atoms/YouTubeVideoEmbed/YouTubeVideoEmbed";

export interface ILessonCard {
  lessonId: string;
}

const LessonCard: React.FC<ILessonCard> = ({ lessonId }) => {
  const maxDescriptionLength = 250;
  const { lesson, mutate } = LessonAPI.useLesson(lessonId);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("common");

  function handleFavoriteChange() {
    const data = {
      ...lesson,
      favorite: !lesson.favorite,
    };
    mutate(LessonAPI.updateLesson(data), optimisticMutationOption(data));
  }

  function handleVisibleChange() {
    const data = {
      ...lesson,
      visible: !lesson.visible,
    };
    mutate(LessonAPI.updateLesson(data), optimisticMutationOption(data));
  }

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
              onClick={handleVisibleChange}
            />
            <FavoriteButton
              active={lesson?.favorite}
              onClick={handleFavoriteChange}
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
