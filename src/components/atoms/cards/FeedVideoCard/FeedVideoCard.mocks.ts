import { IFeedVideoCard } from "./FeedVideoCard";

const base: IFeedVideoCard = {
  feedVideo: {
    publishedAt: new Date(),
    id: "dfajflkanlnjg",
    type: "video",
    videoId: "Tyq0oivryDQ",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

export const mockFeedVideoCardProps = {
  base,
};
