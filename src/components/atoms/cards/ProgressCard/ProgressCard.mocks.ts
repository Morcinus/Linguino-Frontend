import { action } from "@storybook/addon-actions";

import { IProgressCard } from "./ProgressCard";

const small: IProgressCard = {
  header: "Lorem ipsum dolor",
  imageUrl: "https://picsum.photos/id/168/512/512",
  onClick: action("onClick"),
  subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  progress: 27,
  variant: "small",
  claimReward: true,
};

const medium: IProgressCard = {
  header: "Lorem ipsum dolor",
  imageUrl: "https://picsum.photos/id/168/512/512",
  onClick: action("onClick"),
  subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  progress: 27,
  variant: "medium",
  claimReward: true,
};

const large: IProgressCard = {
  header: "Lorem ipsum dolor",
  imageUrl: "https://picsum.photos/id/168/512/512",
  onClick: action("onClick"),
  subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  progress: 27,
  variant: "large",
  claimReward: true,
};

export const mockProgressCardProps = {
  small,
  medium,
  large,
};
