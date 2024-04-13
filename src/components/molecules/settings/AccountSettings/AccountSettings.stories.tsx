import { ComponentMeta, ComponentStory } from "@storybook/react";

import AccountSettings, { IAccountSettings } from "./AccountSettings";
import { mockAccountSettingsProps } from "./AccountSettings.mocks";

export default {
  title: "molecules/settings/AccountSettings",
  component: AccountSettings,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AccountSettings>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccountSettings> = (args) => (
  <AccountSettings {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAccountSettingsProps.base,
} as IAccountSettings;
