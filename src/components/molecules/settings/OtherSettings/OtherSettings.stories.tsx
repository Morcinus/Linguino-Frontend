import { ComponentMeta, ComponentStory } from "@storybook/react";

import OtherSettings, { IOtherSettings } from "./OtherSettings";
import { mockOtherSettingsProps } from "./OtherSettings.mocks";

export default {
  title: "templates/OtherSettings",
  component: OtherSettings,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof OtherSettings>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OtherSettings> = (args) => (
  <OtherSettings {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockOtherSettingsProps.base,
} as IOtherSettings;
