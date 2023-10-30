import { useTranslation } from "i18n/client";
import LessonItemsAPI from "infrastructure/api/user/courses/lesson-items/LessonItemsAPI";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import {
  Avatar,
  Box,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import CardList from "../lists/CardList/CardList";

export interface ILessonItemsSearchResults {
  searchPrompt: string;
  courseId: ID;
}

const LessonItemsSearchResults: React.FC<ILessonItemsSearchResults> = ({
  searchPrompt,
  courseId,
}) => {
  const router = useRouter();
  const { lessonItems } = LessonItemsAPI.useLessonItems(courseId, {
    searchVocabulary: searchPrompt,
  });
  const { t } = useTranslation("cs", "common");

  return (
    <>
      {lessonItems && lessonItems.length > 0 ? (
        <CardList>
          {lessonItems.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItemButton
                  component="a"
                  onClick={() => router.push(`/lesson-items/${item.id}`)}
                >
                  <ListItemAvatar>
                    <Avatar src={item.imageURL} variant="rounded" />
                  </ListItemAvatar>
                  <ListItemText primary={item.nameL2} secondary={item.nameL1} />
                  <Icon>{icons.next}</Icon>
                </ListItemButton>
              </ListItem>
            );
          })}
        </CardList>
      ) : searchPrompt ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body2">{t("search.noWordsFound")}</Typography>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default LessonItemsSearchResults;
