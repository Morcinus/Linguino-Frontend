import { categories } from "config/config";

import React, { useState } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import LessonsList from "components/atoms/LessonsList/LessonsList";
import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";

import { LessonType } from "../../../domain/models/types/lessons";
import { useTranslation } from "../../../i18n/client";
import LessonsAPI from "../../../infrastructure/api/LessonsAPI";

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
            panelContent={lessons && <LessonsList lessons={lessons} />}
            value={value}
          />
        </Box>
      )}
    </>
  );
};

export default LessonsOverview;
