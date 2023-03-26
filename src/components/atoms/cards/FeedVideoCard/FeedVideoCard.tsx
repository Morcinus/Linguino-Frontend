import { FeedVideo } from "infrastructure/api/users/feed/Feed";

import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

import YouTubeVideoEmbed from "components/atoms/YouTubeVideoEmbed/YouTubeVideoEmbed";

export interface IFeedVideoCard {
  feedVideo: FeedVideo;
}

const FeedVideoCard: React.FC<IFeedVideoCard> = ({ feedVideo }) => {
  return (
    <Card>
      <CardMedia sx={{ aspectRatio: "16 / 9" }}>
        <YouTubeVideoEmbed videoId="dQw4w9WgXcQ" />
      </CardMedia>
      <Box sx={{ py: 1, px: 1 }}>
        <Typography>{feedVideo.title}</Typography>
      </Box>
    </Card>
  );
};

export default FeedVideoCard;