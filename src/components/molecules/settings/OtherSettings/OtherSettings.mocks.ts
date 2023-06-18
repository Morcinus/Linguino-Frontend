import { action } from "@storybook/addon-actions";

import { IOtherSettings } from "./OtherSettings";

const base: IOtherSettings = {
  animations: true,
  reviewPreviousLevels: false,
  publicProfile: true,

  onAnimationsChange: action("onAnimationsChange"),
  onReviewPreviousLevelsChange: action("onReviewPreviousLevelsChange"),
  onPublicProfileChange: action("onPublicProfileChange"),
};

export const mockOtherSettingsProps = {
  base,
};
