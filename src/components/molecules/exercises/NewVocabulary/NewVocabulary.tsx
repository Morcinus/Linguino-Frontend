import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import LessonItemsAPI from "infrastructure/api/lesson-items/LessonItemsAPI";

import { Box, Typography } from "@mui/material";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import LessonItemCard from "components/atoms/cards/LessonItemCard/LessonItemCard";

export interface INewVocabulary {
  lessonItemId: ID;
  onContinue: () => void;
  onMarkAsLearned: () => void;
}

const NewVocabulary: React.FC<INewVocabulary> = ({
  lessonItemId,
  onContinue,
  onMarkAsLearned,
}) => {
  const { t } = useTranslation("cs", "common");
  const { lessonItem, mutate } = LessonItemsAPI.useLessonItem(lessonItemId);

  function handleLessonItemChange(change: { [key: string]: boolean | string }) {
    const data = {
      ...lessonItem,
      ...change,
    };
    mutate(
      LessonItemsAPI.updateLessonItem(data),
      optimisticMutationOption(data)
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
        {t("exercise.newVocabulary")}
      </Typography>

      {lessonItem && (
        <Box sx={{ mb: 4 }}>
          <LessonItemCard
            lessonItem={lessonItem}
            onFavoriteChange={(value) =>
              handleLessonItemChange({ favorite: value })
            }
            onVisibleChange={(value) =>
              handleLessonItemChange({ visible: value })
            }
          />
        </Box>
      )}

      <Box display="flex" flexDirection="column">
        <FullWidthButton
          variant="text"
          bottomOffset
          onClick={async () => {
            await handleLessonItemChange({ markAsLearned: true });
            onMarkAsLearned();
          }}
        >
          {t("exercise.iKnowWord")}
        </FullWidthButton>
        <FullWidthButton onClick={() => onContinue()}>
          {t("exercise.continue")}
        </FullWidthButton>
      </Box>
    </Box>
  );
};

export default NewVocabulary;
