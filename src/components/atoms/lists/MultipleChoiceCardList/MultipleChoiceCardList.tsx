import theme from "styles/theme";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CardList from "../CardList/CardList";

export interface Choice {
  name: string;
  description?: string;
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
              <ListItemText primary={item.name} secondary={item.description} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default MultipleChoiceCardList;
