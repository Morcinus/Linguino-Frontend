import { action } from "@storybook/addon-actions";

import { IPlacementTest } from "./PlacementTest";

const base: IPlacementTest = {
  courseId: "fdsajnaljnlsdjg",
  onSubmit: action("onSubmit"),
  onCancel: action("onCancel"),
};

export const mockPlacementTestProps = {
  base,
};
