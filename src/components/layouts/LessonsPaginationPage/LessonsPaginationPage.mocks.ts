import { action } from "@storybook/addon-actions";

import { getNumberOfCurves } from "components/atoms/StudyMap/StudyMap";

import {
  ILessonsPaginationPage,
  LESSONS_PER_PAGE,
} from "./LessonsPaginationPage";

const base: ILessonsPaginationPage = {
  courseId: "jdfhdjghskjgksdjbdf",
  index: 0,
  lastViewedLevel: 2,
  mapHeight: getNumberOfCurves(LESSONS_PER_PAGE * 2) * 200,
  level: 2,
  onActiveLessonChange: action("onActiveLessonChange"),
  activeLessonId: undefined,
};

export const mockLessonsPaginationPageProps = {
  base,
};
