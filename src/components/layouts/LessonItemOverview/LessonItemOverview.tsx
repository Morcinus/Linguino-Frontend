import { optimisticMutationOption } from "infrastructure/api/API";
import LessonItemsAPI from "infrastructure/api/user/courses/lesson-items/LessonItemsAPI";
import theme from "styles/theme";

import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import LevelProgressBar from "components/atoms/LevelProgressBar/LevelProgressBar";
import LessonItemCard from "components/atoms/cards/LessonItemCard/LessonItemCard";
import ExampleSentenceList from "components/atoms/lists/ExampleSentenceList/ExampleSentenceList";

export interface ILessonItemOverview {
  courseId: Id;
  lessonItemId: Id;
}

const LessonItemOverview: React.FC<ILessonItemOverview> = ({
  courseId,
  lessonItemId,
}) => {
  const { lessonItem, mutate } = LessonItemsAPI.useLessonItem(
    courseId,
    lessonItemId
  );
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  function handleFavoriteChange(value: boolean) {
    const newLessonItem = {
      ...lessonItem,
      favorite: value,
    };
    mutate(async () => {
      await LessonItemsAPI.updateLessonItem(courseId, {
        id: lessonItem.id,
        favorite: value,
      });
      return newLessonItem;
    }, optimisticMutationOption(newLessonItem));
  }

  function backgroundCSS(backgroundImageUrl?: string) {
    if (backgroundImageUrl) {
      return {
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    } else {
      return {
        background: `linear-gradient(90deg, rgba(212,255,193,1) 0%, rgba(137,232,97,1) 100%)`,
      };
    }
  }

  return (
    <Box sx={{ pt: desktop ? 8 : 0, width: "100%" }}>
      {lessonItem && (
        <>
          <Box
            sx={{
              width: "100%",
              height: "30vh",
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: 0,
            }}
          >
            {desktop && <Toolbar />}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                ...backgroundCSS(lessonItem.imageUrl),
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
            <LevelProgressBar progress={lessonItem.progress} />
            <LessonItemCard
              lessonItem={lessonItem}
              onFavoriteChange={handleFavoriteChange}
            />
            {lessonItem.examples && (
              <ExampleSentenceList items={lessonItem.examples} />
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default LessonItemOverview;
