import { action } from "@storybook/addon-actions";

import { IFeedbackCard } from "./FeedbackCard";

const base: IFeedbackCard = {
  onFeedbackChange: action("onFeedbackChange"),
  feedback: {
    text: "",
    state: "DISLIKE",
  },
};

export const mockFeedbackCardProps = {
  base,
};
