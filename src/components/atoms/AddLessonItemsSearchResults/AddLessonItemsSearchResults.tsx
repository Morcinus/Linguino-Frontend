import { useTranslation } from "i18n/client";
import { LessonItemSummary } from "infrastructure/api/user/courses/lesson-items/LessonItems";
import LessonItemsAPI from "infrastructure/api/user/courses/lesson-items/LessonItemsAPI";
import icons from "styles/icons";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import IconContainer from "../IconContainer/IconContainer";
import CardList from "../lists/CardList/CardList";

export interface IAddLessonItemsSearchResults {
  searchPrompt: string;
  onItemAdd: (lessonItem: LessonItemSummary) => void;
  onItemRemove: (lessonItem: LessonItemSummary) => void;
  items: Array<LessonItemSummary>;
  courseId: ID;
}

const AddLessonItemsSearchResults: React.FC<IAddLessonItemsSearchResults> = ({
  searchPrompt,
  onItemAdd,
  onItemRemove,
  items,
  courseId,
}) => {
  const { lessonItems } = LessonItemsAPI.useLessonItems(courseId, {
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
                        <IconContainer name={icons.remove} />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => onItemAdd(item)}>
                        <IconContainer name={icons.add} />
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
