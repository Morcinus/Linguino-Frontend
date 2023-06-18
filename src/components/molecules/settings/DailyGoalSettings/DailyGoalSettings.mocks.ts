import { action } from "@storybook/addon-actions";

import { IDailyGoalSettings } from "./DailyGoalSettings";

const base: IDailyGoalSettings = {
  dailyGoal: 5,
  onGoalChange: action("onGoalChange"),
};

export const mockDailyGoalSettingsProps = {
  base,
};
