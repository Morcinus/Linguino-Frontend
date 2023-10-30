import { IFeedVideoCard } from "./FeedVideoCard";

const base: IFeedVideoCard = {
  feedVideo: {
    publishedAt: new Date(),
    id: "dfajflkanlnjg",
    type: "video",
    videoId: "dQw4w9WgXcQ",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

export const mockFeedVideoCardProps = {
  base,
};
