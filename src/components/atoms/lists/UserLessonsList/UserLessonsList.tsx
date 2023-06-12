import icons from "styles/icons";

import { useRouter } from "next/navigation";

import {
  Avatar,
  Icon,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import CardList from "../CardList/CardList";

export interface ListItem {
  id: ID;
  url: string;
  name: string;
  secondaryName?: string;
  imageURL?: string;
}

export interface IUserLessonsList {
  lessons: Array<ListItem>;
}

const UserLessonsList: React.FC<IUserLessonsList> = ({ lessons }) => {
  const router = useRouter();

  return (
    <CardList>
      {lessons.map((link) => {
        return (
          <ListItem
            key={link.id}
            secondaryAction={
              <IconButton
                onClick={() => router.push(`/lessons/${link.id}/update`)}
              >
                <Icon>{icons.edit}</Icon>
              </IconButton>
            }
          >
            <ListItemButton component="a" onClick={() => router.push(link.url)}>
              {link.imageURL && (
                <ListItemAvatar>
                  <Avatar src={link.imageURL} variant="rounded" />
                </ListItemAvatar>
              )}
              <ListItemText
                primary={link.name}
                secondary={link.secondaryName ?? undefined}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default UserLessonsList;
