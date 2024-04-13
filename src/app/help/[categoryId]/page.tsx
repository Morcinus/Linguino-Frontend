// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import HelpArticlesOverview from "components/layouts/HelpArticlesOverview/HelpArticlesOverview";

export interface IHelpArticlesPage {
  params: {
    categoryId: string;
  };
}

const HelpArticlesPage: React.FC<IHelpArticlesPage> = ({ params }) => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <HelpArticlesOverview
          courseId={user.selectedCourse.id}
          categoryId={params.categoryId}
        />
      )}
    </>
  );
};

export default HelpArticlesPage;
