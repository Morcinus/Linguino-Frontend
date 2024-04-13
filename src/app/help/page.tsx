// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import HelpCategoriesOverview from "components/layouts/HelpCategoriesOverview/HelpCategoriesOverview";

export interface IHelpPage {}

const HelpPage: React.FC<IHelpPage> = () => {
  const { user } = useAuth();

  return (
    <>{user && <HelpCategoriesOverview courseId={user.selectedCourse.id} />}</>
  );
};

export default HelpPage;
