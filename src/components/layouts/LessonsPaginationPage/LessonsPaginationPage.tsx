import { StudyMap } from "infrastructure/api/users/courses/study-map/StudyMap";
import StudyMapAPI from "infrastructure/api/users/courses/study-map/StudyMapAPI";

import { Box } from "@mui/material";

import CircleLessonButton from "components/atoms/CircleLessonButton/CircleLessonButton";

export interface ILessonsPaginationPage {
  userId: ID;
  courseId: ID;
  level?: number;
  lastViewedLevel: number;

  index: number;
  mapHeight: number;
}

export const LESSONS_PER_PAGE = 6;

const LessonsPaginationPage: React.FC<ILessonsPaginationPage> = ({
  userId,
  courseId,
  level,
  lastViewedLevel,
  index,
  mapHeight,
}) => {
  const { studyMap } = StudyMapAPI.useStudyMap(userId, courseId, {
    level: level ?? lastViewedLevel,
    page: index,
  });

  function renderLessons(studyMap: StudyMap) {
    const lessons = studyMap.lessons;
    const markup = [];

    for (let i = 0; i < lessons.length; i++) {
      let style = {};
      switch (i % 3) {
        case 0:
          style = {
            position: "absolute",
            top: `${
              ((Math.floor(i / 3) * 400 + 100 + index * 800) / mapHeight) * 100
            }%`,
            left: "55%",
          };
          break;
        case 1:
          style = {
            position: "absolute",
            top: `${
              ((Math.floor(i / 3) * 400 + 200 + index * 800) / mapHeight) * 100
            }%`,
            left: "16.666%",
          };
          break;
        case 2:
          style = {
            position: "absolute",
            top: `${
              ((Math.floor(i / 3) * 400 + 310 + index * 800) / mapHeight) * 100
            }%`,
            left: "70%",
          };
          break;
      }

      markup.push(
        <Box
          style={{ ...style, transform: "translate(-50%, -45%)" }}
          key={`${index}-${lessons[i].id}`}
        >
          <CircleLessonButton
            title={lessons[i].name}
            icon={lessons[i].icon}
            lessonType={lessons[i].type}
            lessonId={lessons[i].id}
          />
        </Box>
      );
    }
    return markup;
  }

  return <>{studyMap && renderLessons(studyMap)}</>;
};

export default LessonsPaginationPage;