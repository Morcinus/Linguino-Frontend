"use client"

import LessonsOverview from "../../components/layouts/LessonsOverview/LessonsOverview";
import { LessonType } from "../../domain/models/types/lessons";

export interface ILessonsPage {
  searchParams: {
    type: LessonType;
  };
}

const LessonsPage: React.FC<ILessonsPage> = ({ searchParams }) => {
  return <LessonsOverview lessonType={searchParams.type} />;
};

export default LessonsPage;
