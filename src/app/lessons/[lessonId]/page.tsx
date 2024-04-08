// prettier-ignore
"use client"

import useAuth from "infrastructure/services/AuthProvider";

import LessonOverview from "components/layouts/LessonOverview/LessonOverview";

import { useParams } from 'next/navigation';

export interface ILessonPage {}

const LessonPage: React.FC<ILessonPage> = () => {
  const { user } = useAuth();
  const params = useParams<{ lessonId: Id }>()

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
