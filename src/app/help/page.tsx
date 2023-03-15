// prettier-ignore
"use client"

import { Box } from "@mui/material";
import LinkCardList from "components/atoms/LinkCardList/LinkCardList";
import ArticleCategoriesAPI from "infrastructure/api/article-categories/ArticleCategoriesAPI";


export interface IHelpPage {}

const HelpPage: React.FC<IHelpPage> = () => {
  const { articleCategories } = ArticleCategoriesAPI.useArticleCategories();

  return (
    <Box sx={{ width: "100%" }}>
      {articleCategories && (
        <LinkCardList
          links={articleCategories.map((category) => {
            return {
              id: category.id,
              name: category.name,
              url: `/help/${category.id}`,
            };
          })}
        />
      )}
    </Box>
  );
};

export default HelpPage;
