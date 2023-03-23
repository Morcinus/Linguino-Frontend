import { FeedArticle } from "infrastructure/api/users/feed/Feed";

import { useRouter } from "next/navigation";

import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface IFeedArticleCard {
  feedArticle: FeedArticle;
}

const FeedArticleCard: React.FC<IFeedArticleCard> = ({ feedArticle }) => {
  const router = useRouter();

  return (
    <Card>
      <CardActionArea onClick={() => router.push(feedArticle.link)}>
        <CardMedia sx={{ height: 140 }} image={feedArticle.imageURL} />
        <Box sx={{ py: 1, px: 1 }}>
          <Typography>{feedArticle.title}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default FeedArticleCard;
