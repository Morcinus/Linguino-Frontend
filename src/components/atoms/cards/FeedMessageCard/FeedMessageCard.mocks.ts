import { action } from "@storybook/addon-actions";

import { IFeedMessageCard } from "./FeedMessageCard";

const base: IFeedMessageCard = {
  onAddReaction: action("onAddReaction"),
  onRemoveReaction: action("onRemoveReaction"),
  feedMessage: {
    id: "dnfksanjfdlsa",
    type: "message",
    author: "Pepa Okurka",
    authorAvatarURL: "https://picsum.photos/id/168/512/512",
    message: "reached_level_50",
    publishedAt: new Date("2042-03-18T20:15:05Z"),
    reactions: [
      {
        counter: 1,
        reactedByUser: false,
        id: "brain",
      },
      {
        counter: 99,
        reactedByUser: false,
        id: "light_bulb",
      },
    ],
  },
};

export const mockFeedMessageCardProps = {
  base,
};
