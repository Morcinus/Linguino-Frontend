"use client"

import { LessonType } from "infrastructure/api/lessons/Lessons";
import LessonsOverview from "../../components/layouts/LessonsOverview/LessonsOverview";

export interface ILessonsPage {
  searchParams: {
    type: LessonType;
  };
}

const LessonsPage: React.FC<ILessonsPage> = ({ searchParams }) => {
  return <LessonsOverview lessonType={searchParams.type} />;
};

export default LessonsPage;
