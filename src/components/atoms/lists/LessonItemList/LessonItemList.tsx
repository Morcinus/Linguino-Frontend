import { LessonItem } from "infrastructure/api/lesson-items/LessonItems";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import CardList from "../CardList/CardList";

export interface ILessonItemList {
  lessonItems: Array<LessonItem>;
}

const LessonItemList: React.FC<ILessonItemList> = ({ lessonItems }) => {
  const router = useRouter();

  return (
    <CardList>
      {lessonItems.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemButton
              component="a"
              onClick={() => router.push(`/lessonItems/${item.id}`)}
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
  );
};

export default LessonItemList;
