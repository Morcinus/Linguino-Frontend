import { ComponentMeta, ComponentStory } from "@storybook/react";

import FillTheBlank, { IFillTheBlank } from "./FillTheBlank";
import { mockFillTheBlankProps } from "./FillTheBlank.mocks";

export default {
  title: "molecules/QuestionAnswers/FillTheBlank",
  component: FillTheBlank,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FillTheBlank>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FillTheBlank> = (args) => (
  <FillTheBlank {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFillTheBlankProps.base,
} as IFillTheBlank;
