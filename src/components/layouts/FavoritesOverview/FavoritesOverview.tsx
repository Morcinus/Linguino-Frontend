import LessonItemsAPI from "infrastructure/api/lesson-items/LessonItemsAPI";
import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";

import React, { useState } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";
import LinkCardList from "components/atoms/lists/LinkCardList/LinkCardList";

import { useTranslation } from "../../../i18n/client";

export interface IFavoritesOverview {}

const FavoritesOverview: React.FC<IFavoritesOverview> = () => {
  const [value, setValue] = useState("lessons");
  const { lessons } = LessonsAPI.useLessons({
    favorite: true,
  });
  const { lessonItems } = LessonItemsAPI.useLessonItems({ favorite: true });
  const { t } = useTranslation("cs", "common");

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="subtitle1">{t("categories")}</Typography>
      <TabBarPanel
        onChange={(value) => setValue(value)}
        tabs={[
          {
            id: "lessons",
            name: t("navigation.lessons"),
          },
          {
            id: "vocabulary",
            name: t("studying.vocabulary"),
          },
        ]}
        panelContent={
          value === "lessons"
            ? lessons && (
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
            : value === "vocabulary"
            ? lessonItems && (
                <LinkCardList
                  links={lessonItems.map((item) => {
                    return {
                      id: item.id,
                      name: item.nameL2,
                      secondaryName: item.nameL1,
                      url: `/lesson-items/${item.id}`,
                      imageURL: item.imageURL,
                    };
                  })}
                />
              )
            : undefined
        }
        value={value}
      />
    </Box>
  );
};

export default FavoritesOverview;
