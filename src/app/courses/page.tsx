// prettier-ignore
"use client"

import { useTranslation } from "i18n/client";
import { default as UserCoursesAPI } from "infrastructure/api/users/courses/CoursesAPI";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import { Box, Icon, IconButton, Typography } from "@mui/material";

import SimpleCard from "components/atoms/cards/SimpleCard/SimpleCard";
import CardGrid from "components/layouts/CardGrid/CardGrid";
import CoursesAPI from "infrastructure/api/courses/CoursesAPI";
import { useRouter } from "next/navigation";

export interface ICoursesPage {
  params: {
    userId: string;
  };
}

const CoursesPage: React.FC<ICoursesPage> = ({ params }) => {
  const { user, mutateUser } = useAuth();
  const { t: tCommon } = useTranslation("cs", "common");
  const router = useRouter();
  const { courses } = UserCoursesAPI.useCourses(params.userId);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" mb={1}>
            {tCommon("navigation.myCourses")}
          </Typography>
          <IconButton onClick={() => router.push("/select-course")}>
            <Icon>{icons.add}</Icon>
          </IconButton>
        </Box>

        {courses && (
          <CardGrid
            align="left"
            cards={courses.map((course) => {
              return {
                component: SimpleCard,
                props: {
                  header: course.name,
                  imageURL: course.thumbnailURL,
                  highlightCard: user?.selectedCourse === course.id,
                  highlightVariant: "outlined",
                  onClick: async () => {
                    if(course.id)
                      await mutateUser({
                        selectedCourse: await CoursesAPI.getCourse(course.id),
                      });
                    router.push("/");
                  },
                },
              };
            })}
          />
        )}
      </Box>
    </Box>
  );
};

export default CoursesPage;
