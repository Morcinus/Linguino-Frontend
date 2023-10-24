// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import ContentContainer from "components/layouts/ContentContainer/ContentContainer";
import CustomLessonsOverview from "components/layouts/CustomLessonsOverview/CustomLessonsOverview";

export interface IUserLessonsPage {}

const UserLessonsPage: React.FC<IUserLessonsPage> = () => {
  const { user } = useAuth();

  return (
    <ContentContainer>
      {user && <CustomLessonsOverview courseId={user.selectedCourse.id} />}
    </ContentContainer>
  );
};

export default UserLessonsPage;
