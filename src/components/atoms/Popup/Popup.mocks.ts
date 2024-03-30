import { action } from "@storybook/addon-actions";

import { IPopup } from "./Popup";

const base: IPopup = {
  header: "Lorem ipsum?",
  text: "Lorem ipsum dolor",
  imageUrl: "https://picsum.photos/id/168/512/512",
  displayCloseButton: true,
  open: true,
  primaryAction: {
    text: "primary",
    onClick: action("onClick primary"),
  },
  secondaryAction: {
    text: "secondary",
    onClick: action("onClick secondary"),
  },
};

export const mockPopupProps = {
  base,
};
