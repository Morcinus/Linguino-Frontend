import { useTranslation } from "i18n/client";
import { optimisticMutationOption } from "infrastructure/api/API";
import LessonItemsAPI from "infrastructure/api/user/courses/lesson-items/LessonItemsAPI";
import icons from "styles/icons";

import { Icon } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FullWidthButton from "components/atoms/FullWidthButton/FullWidthButton";
import LessonItemCard from "components/atoms/cards/LessonItemCard/LessonItemCard";

export interface INewVocabulary {
  lessonItemId: ID;
  courseId: ID;
  onContinue: () => void;
}

const NewVocabulary: React.FC<INewVocabulary> = ({
  lessonItemId,
  courseId,
  onContinue,
}) => {
  const { t } = useTranslation("cs", "common");
  const { lessonItem, mutate } = LessonItemsAPI.useLessonItem(
    courseId,
    lessonItemId
  );

  function handleLessonItemChange(change: { [key: string]: boolean | string }) {
    const newLessonItem = {
      ...lessonItem,
      ...change,
    };

    mutate(async () => {
      await LessonItemsAPI.updateLessonItem(courseId, {
        id: lessonItem.id,
        ...change,
      });
      return newLessonItem;
    }, optimisticMutationOption(newLessonItem));
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
          />
        </Box>
      )}

      <Box display="flex" flexDirection="column">
        <FullWidthButton
          variant="text"
          bottomOffset
          onClick={async () => {
            await handleLessonItemChange({ markAsLearned: true });
            onContinue();
          }}
        >
          {t("exercise.iKnowWord")}
        </FullWidthButton>
        <FullWidthButton
          onClick={() => onContinue()}
          endIcon={<Icon>{icons.next}</Icon>}
        >
          {t("exercise.continue")}
        </FullWidthButton>
      </Box>
    </Box>
  );
};

export default NewVocabulary;
