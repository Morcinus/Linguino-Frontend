import { UserSummary } from "infrastructure/api/users/Users";
import useAuth from "infrastructure/services/AuthProvider";
import icons from "styles/icons";

import { useRouter } from "next/navigation";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import IconContainer from "components/atoms/IconContainer/IconContainer";

import CardList from "../CardList/CardList";

export interface IUsersList {
  users: Array<UserSummary>;
  onFollow?: (userId: Id) => void;
  onUnfollow?: (userId: Id) => void;
}

const UsersList: React.FC<IUsersList> = ({ users, onFollow, onUnfollow }) => {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <CardList>
      {users &&
        users.map((userItem, i) => {
          return (
            <ListItem
              sx={{ pr: 2 }}
              key={i}
              secondaryAction={
                userItem.id !== user?.id && onFollow && onUnfollow ? (
                  userItem.isFollowed ? (
                    <IconButton onClick={() => onUnfollow(userItem.id)}>
                      <IconContainer name={icons.unfollow} />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => onFollow(userItem.id)}>
                      <IconContainer name={icons.follow} />
                    </IconButton>
                  )
                ) : undefined
              }
            >
              <ListItemButton
                component="a"
                onClick={() => router.push(`/users/${userItem.id}`)}
              >
                {userItem.profileImageUrl && (
                  <ListItemAvatar>
                    <Avatar src={userItem.profileImageUrl} variant="rounded" />
                  </ListItemAvatar>
                )}
                <ListItemText
                  primary={userItem.name}
                  secondary={`@${userItem.username}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
    </CardList>
  );
};

export default UsersList;
