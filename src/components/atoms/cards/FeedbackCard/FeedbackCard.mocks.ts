import { action } from "@storybook/addon-actions";

import { IFeedbackCard } from "./FeedbackCard";

const base: IFeedbackCard = {
  onFeedbackChange: action("onFeedbackChange"),
  feedback: {
    state: "DISLIKED",
  },
};

export const mockFeedbackCardProps = {
  base,
};
