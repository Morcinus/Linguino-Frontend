import { useTranslation } from "i18n/client";
import { FeedMessage } from "infrastructure/api/user/feed/Feed";
import { ReactionId } from "infrastructure/api/user/feed/reactions/Reactions";
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

import { availableMessages, availableReactions } from "./config";

export interface IFeedMessageCard {
  feedMessage: FeedMessage;
  onAddReaction: (reactionId: ReactionId) => void;
  onRemoveReaction: (reactionId: ReactionId) => void;
}

const FeedMessageCard: React.FC<IFeedMessageCard> = ({
  feedMessage,
  onAddReaction,
  onRemoveReaction,
}) => {
  const { t } = useTranslation("cs", "common");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {availableMessages.some((message) => message === feedMessage.message) && (
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
              <Typography variant="body2">
                {t(`feed.messages.${feedMessage.message}`)}
              </Typography>
            </Box>
          </CardContent>
          <Box
            sx={{
              px: 2,
              pb: 1,
              gap: 0.5,
              display: "flex",
              alignItems: "center",
            }}
          >
            {feedMessage.reactions.map((reaction) => {
              return (
                <>
                  {availableReactions.some((e) => e.id === reaction.id) && (
                    <Chip
                      key={`${reaction.id}-${feedMessage.id}`}
                      label={`${
                        availableReactions.find((e) => e.id === reaction.id)
                          ?.text
                      } ${reaction.counter}`}
                      variant="outlined"
                      color={reaction.reactedByUser ? "primary" : undefined}
                      size="small"
                      onClick={() => {
                        if (reaction.reactedByUser) {
                          onRemoveReaction(reaction.id);
                        } else {
                          onAddReaction(reaction.id);
                        }
                      }}
                      clickable
                    />
                  )}
                </>
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
                      key={`${reaction.id}-${feedMessage.id}`}
                    >
                      <IconButton
                        onClick={() => {
                          onAddReaction(reaction.id);
                          handleClose();
                        }}
                        size="small"
                      >
                        {reaction.text}
                      </IconButton>
                    </Grid>
                  );
                })}
              </Grid>
            </Menu>
          </Box>
        </Card>
      )}
    </>
  );
};

export default FeedMessageCard;
