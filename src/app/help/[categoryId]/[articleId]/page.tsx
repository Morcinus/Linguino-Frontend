// prettier-ignore
"use client"

import ArticlesAPI from "infrastructure/api/articles/ArticlesAPI";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import MarkdownText from "components/atoms/MarkdownText/MarkdownText";

export interface IHelpArticlePage {
  params: {
    articleId: ID;
    categoryId: ID;
  };
}

const HelpArticlePage: React.FC<IHelpArticlePage> = ({ params }) => {
  const { article } = ArticlesAPI.useArticle(params.articleId);

  return (
    <Box sx={{ width: "100%" }}>
      {article && (
        <>
          <Typography variant="subtitle1">{article.name}</Typography>
          <MarkdownText text={article.text}></MarkdownText>
        </>
      )}
    </Box>
  );
};

export default HelpArticlePage;
