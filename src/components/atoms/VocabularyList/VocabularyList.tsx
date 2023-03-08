import { Vocabulary } from "domain/models/types/vocabulary";
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

export interface IVocabularyList {
  vocabulary: Array<Vocabulary>;
}

const VocabularyList: React.FC<IVocabularyList> = ({ vocabulary }) => {
  const router = useRouter();

  return (
    <CardList>
      {vocabulary.map((word) => {
        return (
          <ListItem key={word.id}>
            <ListItemButton
              component="a"
              onClick={() => router.push(`/vocabulary/${word.id}`)}
            >
              <ListItemAvatar>
                <Avatar src={word.imageURL} variant="rounded" />
              </ListItemAvatar>
              <ListItemText primary={word.nameL2} secondary={word.nameL1} />
              <Icon>{icons.next}</Icon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default VocabularyList;
