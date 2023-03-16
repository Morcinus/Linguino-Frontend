import { LessonItem } from "infrastructure/api/lesson-items/LessonItems";

import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import ListenIconButton from "components/atoms/ListenIconButton/ListenIconButton";
import MarkdownText from "components/atoms/MarkdownText/MarkdownText";

import FavoriteButton from "../../FavoriteButton/FavoriteButton";
import VisibilityButton from "../../VisibilityButton/VisibilityButton";

export interface ILessonItemCard {
  lessonItem: LessonItem;
  onFavoriteChange: (value: boolean) => void;
  onVisibleChange: (value: boolean) => void;
}

const LessonItemCard: React.FC<ILessonItemCard> = ({
  lessonItem,
  onVisibleChange,
  onFavoriteChange,
}) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Typography variant="subtitle1">{lessonItem.nameL2}</Typography>
              <Typography sx={{ flexGrow: 1 }} variant="subtitle2">
                {lessonItem.nameL1}
              </Typography>
            </Box>
            {lessonItem.audioURL && (
              <ListenIconButton audioLink={lessonItem.audioURL} />
            )}
            <VisibilityButton
              active={lessonItem.visible}
              onClick={() => onVisibleChange(!lessonItem.visible)}
            />
            <FavoriteButton
              active={lessonItem.favorite}
              onClick={() => onFavoriteChange(!lessonItem.favorite)}
            />
          </Box>
          {lessonItem.description && (
            <>
              <Divider />
              <MarkdownText text={lessonItem.description}></MarkdownText>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default LessonItemCard;
