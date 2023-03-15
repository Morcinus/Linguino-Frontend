// prettier-ignore
"use client"

import {
  isGradientBackground,
  isImageBackground
} from "domain/models/types/guards/lessonGuard";
import { Background, Feedback } from "domain/models/types/lessons";
import { optimisticMutationOption } from "infrastructure/api/API";
import LessonsAPI from "infrastructure/api/LessonsAPI";

import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import FeedbackCard from "components/atoms/FeedbackCard/FeedbackCard";
import LessonCard from "components/molecules/LessonCard/LessonCard";

export interface ILessonPage {
  params: {
    lessonId: string;
  };
}

const LessonPage: React.FC<ILessonPage> = ({ params }) => {
  const { lesson, mutate } = LessonsAPI.useLesson(params.lessonId);

  function handleFavoriteChange(value: boolean) {
    const data = {
      ...lesson,
      favorite: value,
    };
    mutate(LessonsAPI.updateLesson(data), optimisticMutationOption(data));
  }

  function handleVisibleChange(value: boolean) {
    const data = {
      ...lesson,
      visible: value,
    };
    mutate(LessonsAPI.updateLesson(data), optimisticMutationOption(data));
  }

  function handleFeedbackChange(value: Feedback) {
    const data = {
      ...lesson,
      feedback: value,
    };
    mutate(LessonsAPI.updateLesson(data), optimisticMutationOption(data));
  }

  function backgroundCSS(background?: Background) {
    if (!background) return undefined;

    if (isImageBackground(background)) {
      return {
        backgroundImage: `url("${background.imageURL}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
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
      {lesson && (
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
                ...backgroundCSS(lesson.background),
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
            <LessonCard
              lesson={lesson}
              onFavoriteChange={handleFavoriteChange}
              onVisibleChange={handleVisibleChange}
            />
            <FeedbackCard
              feedback={lesson.feedback}
              onFeedbackChange={handleFeedbackChange}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default LessonPage;
