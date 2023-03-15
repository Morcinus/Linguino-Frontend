import VocabularyAPI from "infrastructure/api/VocabularyAPI";

import React, { useState } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import LinkCardList from "components/atoms/LinkCardList/LinkCardList";
import TabBarPanel from "components/atoms/TabBarPanel/TabBarPanel";
import VocabularyList from "components/atoms/VocabularyList/VocabularyList";

import { useTranslation } from "../../../i18n/client";
import LessonsAPI from "../../../infrastructure/api/LessonsAPI";

export interface IFavoritesOverview {}

const FavoritesOverview: React.FC<IFavoritesOverview> = () => {
  const [value, setValue] = useState("lessons");
  const { lessons } = LessonsAPI.useLessons({
    favorite: true,
  });
  const { vocabulary } = VocabularyAPI.useVocabulary({ favorite: true });
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
            ? vocabulary && <VocabularyList vocabulary={vocabulary} />
            : undefined
        }
        value={value}
      />
    </Box>
  );
};

export default FavoritesOverview;
