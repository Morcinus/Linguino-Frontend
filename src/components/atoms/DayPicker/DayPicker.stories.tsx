import { ComponentMeta, ComponentStory } from "@storybook/react";

import DayPicker, { IDayPicker } from "./DayPicker";
import { mockDayPickerProps } from "./DayPicker.mocks";

export default {
  title: "atoms/DayPicker",
  component: DayPicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DayPicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DayPicker> = (args) => (
  <DayPicker {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDayPickerProps.base,
} as IDayPicker;
