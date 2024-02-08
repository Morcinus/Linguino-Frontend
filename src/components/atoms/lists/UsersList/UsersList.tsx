import { UserSummary } from "infrastructure/api/users/Users";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CardList from "../CardList/CardList";

export interface IUsersList {
  users: Array<UserSummary>;
  onFollow?: (userId: ID) => void;
  onUnfollow?: (userId: ID) => void;
}

const UsersList: React.FC<IUsersList> = ({ users, onFollow, onUnfollow }) => {
  const router = useRouter();

  return (
    <CardList>
      {users &&
        users.map((user, i) => {
          return (
            <ListItem
              sx={{ pr: 2 }}
              key={i}
              secondaryAction={
                onFollow && onUnfollow ? (
                  user.isFollowed ? (
                    <IconButton onClick={() => onUnfollow(user.id)}>
                      <Icon>{icons.unfollow}</Icon>
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => onFollow(user.id)}>
                      <Icon>{icons.follow}</Icon>
                    </IconButton>
                  )
                ) : undefined
              }
            >
              <ListItemButton
                component="a"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                {user.profileImageURL && (
                  <ListItemAvatar>
                    <Avatar src={user.profileImageURL} variant="rounded" />
                  </ListItemAvatar>
                )}
                <ListItemText
                  primary={user.name}
                  secondary={`@${user.username}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
    </CardList>
  );
};

export default UsersList;
