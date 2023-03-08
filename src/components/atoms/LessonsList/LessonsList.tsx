import icons from "styles/icons";

import { useRouter } from "next/navigation";

import { Icon, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { Lesson } from "../../../domain/models/types/lessons";
import CardList from "../CardList/CardList";

export interface ILessonsList {
  lessons: Array<Lesson>;
}

const LessonsList: React.FC<ILessonsList> = ({ lessons }) => {
  const router = useRouter();

  return (
    <CardList>
      {lessons.map((lesson) => {
        return (
          <ListItem key={lesson.id}>
            <ListItemButton
              component="a"
              onClick={() => router.push(`/lessons/${lesson.id}`)}
            >
              <ListItemText primary={lesson.name} />
              <Icon>{icons.next}</Icon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default LessonsList;
