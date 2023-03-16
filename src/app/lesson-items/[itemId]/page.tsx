// prettier-ignore
"use client"

import { optimisticMutationOption } from "infrastructure/api/API";
import LessonItemsAPI from "infrastructure/api/lesson-items/LessonItemsAPI";
import { Background } from "infrastructure/api/lessons/Lessons";
import {
  isGradientBackground,
  isImageBackground
} from "infrastructure/api/lessons/LessonsGuard";

import { Box, Toolbar } from "@mui/material";

import LevelProgressBar from "components/atoms/LevelProgressBar/LevelProgressBar";
import ExampleSentenceList from "components/atoms/lists/ExampleSentenceList/ExampleSentenceList";
import LessonItemCard from "components/molecules/LessonItemCard/LessonItemCard";

export interface ILessonItemPage {
  params: {
    itemId: ID;
  };
}

const LessonItemPage: React.FC<ILessonItemPage> = ({ params }) => {
  const { lessonItem, mutate } = LessonItemsAPI.useLessonItem(params.itemId);

  function handleFavoriteChange(value: boolean) {
    const data = {
      ...lessonItem,
      favorite: value,
    };
    mutate(
      LessonItemsAPI.updateLessonItem(data),
      optimisticMutationOption(data)
    );
  }

  function handleVisibleChange(value: boolean) {
    const data = {
      ...lessonItem,
      visible: value,
    };
    mutate(
      LessonItemsAPI.updateLessonItem(data),
      optimisticMutationOption(data)
    );
  }

  function backgroundCSS(background?: Background) {
    if (!background) return undefined;

    if (isImageBackground(background)) {
      return {
        backgroundImage: `url("${background.imageURL}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      };
    }

    if (isGradientBackground(background)) {
      return {
        background: `linear-gradient(${background.gradient})`,
      };
    }
  }

  return (
    <>
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
            <Toolbar />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                ...backgroundCSS(lessonItem.background),
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
            <LevelProgressBar progress={lessonItem.progress}/>
            <LessonItemCard
              lessonItem={lessonItem}
              onFavoriteChange={handleFavoriteChange}
              onVisibleChange={handleVisibleChange}
            />
            {lessonItem.examples && (
              <ExampleSentenceList items={lessonItem.examples} />
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default LessonItemPage;
