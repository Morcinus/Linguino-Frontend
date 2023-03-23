import { action } from "@storybook/addon-actions";

import { IFeedMessageCard } from "./FeedMessageCard";

const base: IFeedMessageCard = {
  onReactionClick: action("onReactionClick"),
  onAddReaction: action("onAddReaction"),
  feedMessage: {
    id: "dnfksanjfdlsa",
    type: "message",
    author: "Pepa Okurka",
    authorAvatarURL: "https://picsum.photos/id/168/512/512",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishedAt: new Date("2042-03-18T20:15:05Z"),
    reactions: [
      {
        counter: 1,
        reactedByUser: false,
        text: "🧠",
      },
      {
        counter: 99,
        reactedByUser: false,
        text: "💡",
      },
    ],
  },
};

export const mockFeedMessageCardProps = {
  base,
};
