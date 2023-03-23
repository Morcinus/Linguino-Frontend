import { FeedMessage } from "infrastructure/api/users/feed/Feed";
import icons from "styles/icons";

import { useState } from "react";

import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import OutlinedIcon from "components/atoms/OutlinedIcon/OutlinedIcon";

import availableReactions from "./config";

export interface IFeedMessageCard {
  feedMessage: FeedMessage;
  onReactionClick: (reactionText: string) => void;
  onAddReaction: (reactionText: string) => void;
}

const FeedMessageCard: React.FC<IFeedMessageCard> = ({
  feedMessage,
  onReactionClick,
  onAddReaction,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardContent sx={{ display: "flex", gap: 1, pb: 1 }}>
        <Box>
          <Avatar src={feedMessage.authorAvatarURL}></Avatar>
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
            <Typography variant="body1" fontWeight="bold">
              {feedMessage.author}
            </Typography>
            <Typography variant="body2">
              {new Date(feedMessage.publishedAt).toLocaleDateString()}
            </Typography>
          </Box>
          <Typography variant="body2">{feedMessage.message}</Typography>
        </Box>
      </CardContent>
      <Box
        sx={{ px: 2, pb: 1, gap: 0.5, display: "flex", alignItems: "center" }}
      >
        {feedMessage.reactions.map((reaction) => {
          return (
            <Chip
              key={`${reaction.text}-${feedMessage.id}`}
              label={`${reaction.text} ${reaction.counter}`}
              variant="outlined"
              color={reaction.reactedByUser ? "primary" : undefined}
              size="small"
              onClick={() => onReactionClick(reaction.text)}
              clickable
            />
          );
        })}
        <IconButton onClick={handleClick} size="small">
          <OutlinedIcon fontSize="small">{icons.addReaction}</OutlinedIcon>
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <Grid container spacing={0}>
            {availableReactions.map((reaction) => {
              return (
                <Grid
                  xs={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  key={`${reaction}-${feedMessage.id}`}
                >
                  <IconButton
                    onClick={() => {
                      onAddReaction(reaction);
                      handleClose();
                    }}
                    size="small"
                  >
                    {reaction}
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        </Menu>
      </Box>
    </Card>
  );
};

export default FeedMessageCard;
