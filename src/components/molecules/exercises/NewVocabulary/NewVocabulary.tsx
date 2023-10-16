import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import LessonItemsAPI from "infrastructure/api/lesson-items/LessonItemsAPI";

import { Box, Typography } from "@mui/material";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import LessonItemCard from "components/atoms/cards/LessonItemCard/LessonItemCard";

export interface INewVocabulary {
  lessonItemId: ID;
  onContinue: () => void;
}

const NewVocabulary: React.FC<INewVocabulary> = ({
  lessonItemId,
  onContinue,
}) => {
  const { t } = useTranslation("cs", "common");
  const { lessonItem, mutate } = LessonItemsAPI.useLessonItem(lessonItemId);

  function handleLessonItemChange(change: { [key: string]: boolean | string }) {
    mutate(
      LessonItemsAPI.updateLessonItem({
        ...change,
      }),
      optimisticMutationOption({
        ...lessonItem,
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
