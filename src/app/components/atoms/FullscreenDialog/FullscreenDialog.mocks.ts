import { action } from "@storybook/addon-actions";

import { IFullscreenDialog } from "./FullscreenDialog";

const base: IFullscreenDialog = {
  header1: "Header 1",
  header2: "Header 2",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imageURL: "https://picsum.photos/id/168/512/512",
  primaryButton: {
    text: "Primary Button",
    onClick: action("onClick primaryButton"),
  },
  secondaryButton: {
    text: "Secondary Button",
    onClick: action("onClick secondaryButton"),
  },
};

export const mockFullscreenDialogProps = {
  base,
};
