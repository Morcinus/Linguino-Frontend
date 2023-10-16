import { useTranslation } from "i18n/client";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";

import { Box, Typography } from "@mui/material";

import LinkCardList from "../lists/LinkCardList/LinkCardList";

export interface ILessonsSearchResults {
  searchPrompt: string;
}

const LessonsSearchResults: React.FC<ILessonsSearchResults> = ({
  searchPrompt,
}) => {
  const { lessons } = LessonsAPI.useLessons({
    searchName: searchPrompt,
  });
  const { t } = useTranslation("cs", "common");

  return (
    <>
      {lessons && lessons.length > 0 ? (
        <LinkCardList
          links={lessons.map((lesson) => {
            return {
              id: lesson.id,
              name: lesson.name,
              url: `/lessons/${lesson.id}`,
            };
          })}
        />
      ) : searchPrompt ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body2">{t("search.noLessonsFound")}</Typography>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default LessonsSearchResults;
