import { useTranslation } from "i18n/client";
import { LessonItem } from "infrastructure/api/lesson-items/LessonItems";
import LessonItemsAPI from "infrastructure/api/lesson-items/LessonItemsAPI";
import icons from "styles/icons";

import {
  Avatar,
  Box,
  Icon,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import CardList from "../lists/CardList/CardList";

export interface IAddLessonItemsSearchResults {
  searchPrompt: string;
  onItemAdd: (lessonItem: LessonItem) => void;
  onItemRemove: (lessonItem: LessonItem) => void;
  items: Array<Pick<LessonItem, "id" | "nameL1" | "nameL2" | "imageURL">>;
}

const AddLessonItemsSearchResults: React.FC<IAddLessonItemsSearchResults> = ({
  searchPrompt,
  onItemAdd,
  onItemRemove,
  items,
}) => {
  const { lessonItems } = LessonItemsAPI.useLessonItems({
    searchVocabulary: searchPrompt,
  });
  const { t } = useTranslation("cs", "common");

  return (
    <>
      {lessonItems &&
        (lessonItems.length > 0 ? (
          <CardList>
            {lessonItems.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    items.some((i) => i.id == item.id) ? (
                      <IconButton onClick={() => onItemRemove(item)}>
                        <Icon>{icons.remove}</Icon>
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => onItemAdd(item)}>
                        <Icon>{icons.add}</Icon>
                      </IconButton>
                    )
                  }
                  sx={{ pr: 2 }}
                >
                  <ListItemButton
                    component="a"
                    onClick={() =>
                      window.open(`/lesson-items/${item.id}`, "_ blank")
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={item.imageURL} variant="rounded" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.nameL2}
                      secondary={item.nameL1}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </CardList>
        ) : searchPrompt ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body2">
              {t("userLessons.noWordsFound")}
            </Typography>
          </Box>
        ) : (
          ""
        ))}
    </>
  );
};

export default AddLessonItemsSearchResults;
