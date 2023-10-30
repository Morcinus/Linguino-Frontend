import { LessonItemSummary } from "infrastructure/api/user/courses/lesson-items/LessonItems";

import { useRouter } from "next/navigation";

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import ListenIconButton from "components/atoms/ListenIconButton/ListenIconButton";

import CardList from "../CardList/CardList";

export interface ILessonItemList {
  lessonItems: Array<LessonItemSummary>;
}

const LessonItemList: React.FC<ILessonItemList> = ({ lessonItems }) => {
  const router = useRouter();

  return (
    <CardList>
      {lessonItems.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              item.audioURL ? (
                <ListenIconButton audioLink={item.audioURL} />
              ) : undefined
            }
            sx={{ pr: 2 }}
          >
            <ListItemButton
              component="a"
              onClick={() => router.push(`/lesson-items/${item.id}`)}
            >
              <ListItemAvatar>
                <Avatar src={item.imageURL} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary={item.nameL2} secondary={item.nameL1} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default LessonItemList;
