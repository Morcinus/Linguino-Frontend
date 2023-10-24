// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import LessonOverview from "components/layouts/LessonOverview/LessonOverview";

export interface ILessonPage {
  params: {
    lessonId: string;
  };
}

const LessonPage: React.FC<ILessonPage> = ({ params }) => {
  const { user } = useAuth();

  return (
    <>
      {user && params.lessonId && (
        <LessonOverview
          courseId={user.selectedCourse.id}
          lessonId={params.lessonId}
        />
      )}
    </>
  );
};

export default LessonPage;
