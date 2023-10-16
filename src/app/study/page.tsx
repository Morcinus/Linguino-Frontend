// prettier-ignore
"use client"

import DailyStudy from "components/molecules/DailyStudy/DailyStudy";
import LessonStudy from "components/molecules/LessonStudy/LessonStudy";

export interface IStudyPage {
  searchParams: {
    lessonId: string;
  };
}

const StudyPage: React.FC<IStudyPage> = ({ searchParams }) => {
  return (
    <>
      {searchParams.lessonId ? (
        <LessonStudy lessonId={searchParams.lessonId} />
      ) : (
        <DailyStudy />
      )}
    </>
  );
};

export default StudyPage;
