// prettier-ignore
"use client"

import LessonsAPI from "infrastructure/api/lessons/LessonsAPI";

import Box from "@mui/material/Box";

import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import UserLessonsList from "components/atoms/lists/UserLessonsList/UserLessonsList";
import ContentContainer from "components/layouts/ContentContainer/ContentContainer";
import { useTranslation } from "i18n/client";
import { useRouter } from "next/navigation";
import icons from "styles/icons";

export interface IUserLessonsPage {
  params: {
    userId: string;
  };
}

const UserLessonsPage: React.FC<IUserLessonsPage> = ({ params }) => {
  const { lessons } = LessonsAPI.useLessons({
    author: params.userId,
  });
  const { t: tCommon } = useTranslation("cs", "common");
  const router = useRouter();

  return (
    <ContentContainer>
      <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" mb={1}>
            {tCommon("navigation.myLessons")}
          </Typography>
          <IconButton onClick={() => router.push("/lessons-create")}>
            <Icon>{icons.add}</Icon>
          </IconButton>
        </Box>
        {lessons && 
        <UserLessonsList
          lessons={lessons.map((lesson) => {
            return {
              id: lesson.id,
              name: lesson.name,
              url: `/lessons/${lesson.id}`,
            };
          })}
        />}
      </Box>
    </ContentContainer>
  );
};

export default UserLessonsPage;
