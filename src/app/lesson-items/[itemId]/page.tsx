// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import LessonItemOverview from "components/layouts/LessonItemOverview/LessonItemOverview";

export interface ILessonItemPage {
  params: {
    itemId: Id;
  };
}

const LessonItemPage: React.FC<ILessonItemPage> = ({ params }) => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <LessonItemOverview
          courseId={user.selectedCourse.id}
          lessonItemId={params.itemId}
        />
      )}
    </>
  );
};

export default LessonItemPage;
