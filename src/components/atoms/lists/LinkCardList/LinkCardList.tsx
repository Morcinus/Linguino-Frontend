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

export interface ListItem {
  id: ID;
  url: string;
  name: string;
  secondaryName?: string;
  imageURL?: string;
}

export interface ILinkCardList {
  links: Array<ListItem>;
}

const LinkCardList: React.FC<ILinkCardList> = ({ links }) => {
  const router = useRouter();

  return (
    <CardList>
      {links.map((link) => {
        return (
          <ListItem key={link.id}>
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
              <Icon>{icons.next}</Icon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default LinkCardList;
