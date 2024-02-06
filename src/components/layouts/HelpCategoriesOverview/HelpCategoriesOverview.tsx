import ArticleCategoriesAPI from "infrastructure/api/courses/article-categories/ArticleCategoriesAPI";

import Box from "@mui/material/Box";

import LinkCardList from "components/atoms/lists/LinkCardList/LinkCardList";

export interface IHelpCategoriesOverview {
  courseId: ID;
}

const HelpCategoriesOverview: React.FC<IHelpCategoriesOverview> = ({
  courseId,
}) => {
  const { articleCategories } =
    ArticleCategoriesAPI.useArticleCategories(courseId);

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

export default HelpCategoriesOverview;
