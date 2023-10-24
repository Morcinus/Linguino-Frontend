import LessonsAPI from "infrastructure/api/user/courses/lessons/LessonsAPI";
import icons from "styles/icons";

import React from "react";

import { useRouter } from "next/navigation";

import { Icon, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

import UserLessonsList from "components/atoms/lists/UserLessonsList/UserLessonsList";

import { useTranslation } from "../../../i18n/client";

export interface ICustomLessonsOverview {
  courseId: ID;
}

const CustomLessonsOverview: React.FC<ICustomLessonsOverview> = ({
  courseId,
}) => {
  const { lessons } = LessonsAPI.useLessons(courseId, {
    custom: true,
  });
  const { t: tCommon } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" mb={1}>
          {tCommon("navigation.myLessons")}
        </Typography>
        <IconButton onClick={() => router.push("/lessons-create")}>
          <Icon>{icons.add}</Icon>
        </IconButton>
      </Box>
      {lessons && (
        <UserLessonsList
          lessons={lessons.map((lesson) => {
            return {
              id: lesson.id,
              name: lesson.name,
              url: `/lessons/${lesson.id}`,
            };
          })}
        />
      )}
    </Box>
  );
};

export default CustomLessonsOverview;
