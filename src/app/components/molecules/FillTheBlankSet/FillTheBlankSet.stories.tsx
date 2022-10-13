import { ComponentMeta, ComponentStory } from "@storybook/react";

import FillTheBlankSet, { IFillTheBlankSet } from "./FillTheBlankSet";
import { mockFillTheBlankSetProps } from "./FillTheBlankSet.mocks";

export default {
  title: "templates/FillTheBlankSet",
  component: FillTheBlankSet,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FillTheBlankSet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FillTheBlankSet> = (args) => (
  <FillTheBlankSet {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFillTheBlankSetProps.base,
} as IFillTheBlankSet;
