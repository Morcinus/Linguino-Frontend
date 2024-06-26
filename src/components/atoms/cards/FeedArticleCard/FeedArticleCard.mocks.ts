import { IFeedArticleCard } from "./FeedArticleCard";

const base: IFeedArticleCard = {
  feedArticle: {
    id: "sdmflafl",
    type: "article",
    link: "https://example.com",
    imageUrl: "https://picsum.photos/id/168/512/512",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: new Date(),
  },
};

export const mockFeedArticleCardProps = {
  base,
};
