import { ComponentMeta, ComponentStory } from "@storybook/react";

import DailyGoalSettings, { IDailyGoalSettings } from "./DailyGoalSettings";
import { mockDailyGoalSettingsProps } from "./DailyGoalSettings.mocks";

export default {
  title: "templates/DailyGoalSettings",
  component: DailyGoalSettings,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DailyGoalSettings>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DailyGoalSettings> = (args) => (
  <DailyGoalSettings {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDailyGoalSettingsProps.base,
} as IDailyGoalSettings;
