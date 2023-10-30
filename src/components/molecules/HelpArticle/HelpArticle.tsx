import ArticlesAPI from "infrastructure/api/courses/articles/ArticlesAPI";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import MarkdownText from "components/atoms/MarkdownText/MarkdownText";

export interface IHelpArticle {
  courseId: ID;
  articleId: ID;
}

const HelpArticle: React.FC<IHelpArticle> = ({ courseId, articleId }) => {
  const { article } = ArticlesAPI.useArticle(courseId, articleId);

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

export default HelpArticle;
