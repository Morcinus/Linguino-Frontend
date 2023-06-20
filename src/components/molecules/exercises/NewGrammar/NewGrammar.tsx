import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";

import { Box, Typography } from "@mui/material";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import LessonCard from "components/atoms/cards/LessonCard/LessonCard";

export interface INewGrammar {
  lessonId: ID;
  onContinue: () => void;
  onMarkAsLearned: () => void;
}

const NewGrammar: React.FC<INewGrammar> = ({
  lessonId,
  onContinue,
  onMarkAsLearned,
}) => {
  const { t } = useTranslation("cs", "common");
  const { lesson, mutate } = LessonsAPI.useLesson(lessonId);

  function handleLessonChange(change: { [key: string]: boolean | string }) {
    mutate(
      LessonsAPI.updateLesson({
        ...change,
      }),
      optimisticMutationOption({
        ...lesson,
        ...change,
      })
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "auto",
        gap: 2,
        mb: 4,
      }}
    >
      <Typography variant="subtitle1" alignSelf="center">
        {t("exercise.newGrammar")}
      </Typography>

      {lesson && (
        <Box sx={{ mb: 4 }}>
          <LessonCard
            lesson={lesson}
            onFavoriteChange={(value) =>
              handleLessonChange({ favorite: value })
            }
            onVisibleChange={(value) => handleLessonChange({ visible: value })}
          />
        </Box>
      )}

      <Box display="flex" flexDirection="column">
        <FullWidthButton
          variant="text"
          bottomOffset
          onClick={async () => {
            await handleLessonChange({ markAsLearned: true });
            onMarkAsLearned();
          }}
        >
          {t("exercise.iKnowGrammar")}
        </FullWidthButton>
        <FullWidthButton onClick={() => onContinue()}>
          {t("exercise.continue")}
        </FullWidthButton>
      </Box>
    </Box>
  );
};

export default NewGrammar;
