import icons from "styles/icons";

import { useRouter } from "next/navigation";

import { Icon, ListItem, ListItemButton, ListItemText } from "@mui/material";

import CardList from "../CardList/CardList";

export interface ListItem {
  id: ID;
  url: string;
  name: string;
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
              <ListItemText primary={link.name} />
              <Icon>{icons.next}</Icon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default LinkCardList;
