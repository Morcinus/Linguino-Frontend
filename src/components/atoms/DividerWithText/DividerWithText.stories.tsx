import { ComponentMeta, ComponentStory } from "@storybook/react";

import DividerWithText, { IDividerWithText } from "./DividerWithText";
import { mockDividerWithTextProps } from "./DividerWithText.mocks";

export default {
  title: "atoms/DividerWithText",
  component: DividerWithText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DividerWithText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DividerWithText> = (args) => (
  <DividerWithText {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDividerWithTextProps.base,
} as IDividerWithText;
