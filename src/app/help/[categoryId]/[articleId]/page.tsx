// prettier-ignore
"use client"

import HelpArticle from "components/molecules/HelpArticle/HelpArticle";
import useAuth from "infrastructure/services/AuthProvider";

export interface IHelpArticlePage {
  params: {
    articleId: ID;
    categoryId: ID;
  };
}

const HelpArticlePage: React.FC<IHelpArticlePage> = ({ params }) => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <HelpArticle
          courseId={user.selectedCourse.id}
          articleId={params.articleId}
        />
      )}
    </>
  );
};

export default HelpArticlePage;
