import { Follower } from "infrastructure/api/users/followers/Followers";
import { Following } from "infrastructure/api/users/following/Following";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import {
  Icon,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import CardList from "../CardList/CardList";

export interface IUsersList {
  users: Array<Follower> | Array<Following>;
  onFollow: (userId: ID) => void;
  onUnfollow: (userId: ID) => void;
}

const UsersList: React.FC<IUsersList> = ({ users, onFollow, onUnfollow }) => {
  const router = useRouter();

  return (
    <CardList>
      {users.map((user, i) => {
        return (
          <ListItem
            key={i}
            secondaryAction={
              user.isFollowed ? (
                <IconButton edge="end" onClick={() => onUnfollow(user.id)}>
                  <Icon>{icons.unfollow}</Icon>
                </IconButton>
              ) : (
                <IconButton edge="end" onClick={() => onFollow(user.id)}>
                  <Icon>{icons.follow}</Icon>
                </IconButton>
              )
            }
          >
            <ListItemButton
              component="a"
              onClick={() => router.push(`/users/${user.id}`)}
            >
              <ListItemText primary={user.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </CardList>
  );
};

export default UsersList;
