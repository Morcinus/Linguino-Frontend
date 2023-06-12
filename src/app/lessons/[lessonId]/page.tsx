// prettier-ignore
"use client"

import { optimisticMutationOption } from "infrastructure/api/API";
import { Background, Feedback } from "infrastructure/api/lessons/Lessons";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";
import {
  isGradientBackground,
  isImageBackground
} from "infrastructure/api/lessons/LessonsGuard";

import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import BottomFab from "components/atoms/BottomFab/BottomFab";
import FeedbackCard from "components/atoms/cards/FeedbackCard/FeedbackCard";
import LessonCard from "components/atoms/cards/LessonCard/LessonCard";
import LessonItemList from "components/atoms/lists/LessonItemList/LessonItemList";
import { useTranslation } from "i18n/client";
import { useRouter } from "next/navigation";
import icons from "styles/icons";

export interface ILessonPage {
  params: {
    lessonId: string;
  };
}

const LessonPage: React.FC<ILessonPage> = ({ params }) => {
  const { t } = useTranslation("cs", "common");
  const router = useRouter();
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
      {lesson && (
        <Box sx={{ pt: 8 }}>
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
            {lesson.items && <LessonItemList lessonItems={lesson.items} />}
            <FeedbackCard
              feedback={lesson.feedback}
              onFeedbackChange={handleFeedbackChange}
            />
          </Box>
          <BottomFab
        header={t("studying.studyLesson")}
        icon={icons.next}
        onClick={() => router.push(`/study?lessonId=${params.lessonId}`)}
      />
        </Box>
      )}
    </>
  );
};

export default LessonPage;
