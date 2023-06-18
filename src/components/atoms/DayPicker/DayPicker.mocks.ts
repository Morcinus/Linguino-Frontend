import { action } from "@storybook/addon-actions";

import { IDayPicker } from "./DayPicker";

const base: IDayPicker = {
  days: ["wednesday", "sunday"],
  onDaysChange: action("onDaysChange"),
};

export const mockDayPickerProps = {
  base,
};
