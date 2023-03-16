import { categories } from "config/config";
import { LessonType } from "infrastructure/api/lessons/Lessons";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";

import React, { useState } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";
import LinkCardList from "components/atoms/lists/LinkCardList/LinkCardList";

import { useTranslation } from "../../../i18n/client";

export interface ILessonsOverview {
  lessonType: LessonType;
}

const LessonsOverview: React.FC<ILessonsOverview> = ({ lessonType }) => {
  const [value, setValue] = useState(categories[0].id);
  const { lessons, isLoading } = LessonsAPI.useLessons({
    type: lessonType,
    categoryId: value,
  });
  const { t } = useTranslation("cs", "common");

  return (
    <>
      {isLoading || (
        <Box>
          <Typography variant="subtitle1">{t("categories")}</Typography>
          <TabBarPanel
            onChange={(value) => setValue(value)}
            tabs={categories}
            panelContent={
              lessons && (
                <LinkCardList
                  links={lessons.map((lesson) => {
                    return {
                      id: lesson.id,
                      name: lesson.name,
                      url: `/lessons/${lesson.id}`,
                    };
                  })}
                />
              )
            }
            value={value}
          />
        </Box>
      )}
    </>
  );
};

export default LessonsOverview;
