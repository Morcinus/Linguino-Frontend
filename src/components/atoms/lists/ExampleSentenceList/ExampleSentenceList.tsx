import { ExampleSentence } from "infrastructure/api/lesson-items/LessonItems";

import { ListItem, ListItemText } from "@mui/material";

import ListenIconButton from "components/atoms/ListenIconButton/ListenIconButton";

import CardList from "../CardList/CardList";

export interface IExampleSentenceList {
  items: Array<ExampleSentence>;
}

const ExampleSentenceList: React.FC<IExampleSentenceList> = ({ items }) => {
  return (
    <CardList>
      {items.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              item.audioURL ? (
                <ListenIconButton audioLink={item.audioURL} />
              ) : undefined
            }
            sx={{ px: 2 }}
          >
            <ListItemText primary={item.textL2} secondary={item.textL1} />
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default ExampleSentenceList;
