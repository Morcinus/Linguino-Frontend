import { ComponentMeta, ComponentStory } from "@storybook/react";

import NotificationSettings, {
  INotificationSettings,
} from "./NotificationSettings";
import { mockNotificationSettingsProps } from "./NotificationSettings.mocks";

export default {
  title: "molecules/settings/NotificationSettings",
  component: NotificationSettings,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NotificationSettings>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationSettings> = (args) => (
  <NotificationSettings {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNotificationSettingsProps.base,
} as INotificationSettings;
