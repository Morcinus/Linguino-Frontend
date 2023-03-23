import { IFeedArticleCard } from "./FeedArticleCard";

const base: IFeedArticleCard = {
  feedArticle: {
    id: "sdmflafl",
    type: "article",
    link: "https://example.com",
    imageURL: "https://picsum.photos/id/168/512/512",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

export const mockFeedArticleCardProps = {
  base,
};
