import theme from "styles/theme";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import CardList from "../CardList/CardList";

export interface Choice {
  name: string;
}

export interface IMultipleChoiceCardList {
  choices: Array<Choice>;
  onChange: (selectedIndex: number) => void;
  selectedIndex?: number;
}

const MultipleChoiceCardList: React.FC<IMultipleChoiceCardList> = ({
  onChange,
  selectedIndex,
  choices,
}) => {
  return (
    <CardList>
      {choices.map((item, i) => {
        return (
          <ListItem
            key={i}
            sx={{
              px: 2,
            }}
          >
            <ListItemButton
              sx={{
                border:
                  selectedIndex === i
                    ? `4px solid ${theme.palette.primary.main}`
                    : undefined,
              }}
              onClick={() => onChange(i)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default MultipleChoiceCardList;
