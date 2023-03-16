// prettier-ignore
"use client"

import ArticlesAPI from "infrastructure/api/articles/ArticlesAPI";

import { Box } from "@mui/material";
import LinkCardList from "components/atoms/lists/LinkCardList/LinkCardList";

export interface IHelpArticlesPage {
  params: {
    categoryId: string;
  };
}

const HelpArticlesPage: React.FC<IHelpArticlesPage> = ({ params }) => {
  const { articles } = ArticlesAPI.useArticles({ category: params.categoryId });

  return (
    <Box sx={{ width: "100%" }}>
      {articles && (
        <LinkCardList
          links={articles.map((article) => {
            return {
              id: article.id,
              name: article.name,
              url: `/help/${params.categoryId}/${article.id}`,
            };
          })}
        />
      )}
    </Box>
  );
};

export default HelpArticlesPage;
