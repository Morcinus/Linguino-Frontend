import icons from "styles/icons";

import { useRouter } from "next/navigation";

import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import IconContainer from "components/atoms/IconContainer/IconContainer";

import CardList from "../CardList/CardList";

export interface ListItem {
  id: Id;
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
              <IconContainer name={icons.next} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default LinkCardList;
