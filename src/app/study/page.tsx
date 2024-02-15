// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import DailyStudy from "components/molecules/DailyStudy/DailyStudy";
import LessonStudy from "components/molecules/LessonStudy/LessonStudy";

export interface IStudyPage {
  searchParams: {
    lessonId: string;
  };
}

const StudyPage: React.FC<IStudyPage> = ({ searchParams }) => {
  const { user } = useAuth();

  return (
    <>
      {user?.selectedCourse.id ? (
        searchParams.lessonId ? (
          <LessonStudy
            lessonId={searchParams.lessonId}
            courseId={user.selectedCourse.id}
          />
        ) : (
          <DailyStudy courseId={user.selectedCourse.id} />
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default StudyPage;
