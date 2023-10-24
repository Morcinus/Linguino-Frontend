import { useTranslation } from "i18n/client";
import LessonsAPI from "infrastructure/api/user/courses/lessons/LessonsAPI";

import { Box, Typography } from "@mui/material";

import LinkCardList from "../lists/LinkCardList/LinkCardList";

export interface ILessonsSearchResults {
  courseId: ID;
  searchPrompt: string;
}

const LessonsSearchResults: React.FC<ILessonsSearchResults> = ({
  courseId,
  searchPrompt,
}) => {
  const { lessons } = LessonsAPI.useLessons(courseId, {
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
