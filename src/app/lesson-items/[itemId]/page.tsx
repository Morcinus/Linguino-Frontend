// prettier-ignore
"use client"

import { optimisticMutationOption } from "infrastructure/api/API";
import LessonItemsAPI from "infrastructure/api/lesson-items/LessonItemsAPI";

import { Box, Toolbar } from "@mui/material";

import LessonItemCard from "components/atoms/cards/LessonItemCard/LessonItemCard";
import LevelProgressBar from "components/atoms/LevelProgressBar/LevelProgressBar";
import ExampleSentenceList from "components/atoms/lists/ExampleSentenceList/ExampleSentenceList";

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
                ...backgroundCSS(lessonItem.backgroundImageUrl),
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
