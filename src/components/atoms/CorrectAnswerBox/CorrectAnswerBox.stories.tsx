import { ComponentMeta, ComponentStory } from "@storybook/react";

import CorrectAnswerBox, { ICorrectAnswerBox } from "./CorrectAnswerBox";
import { mockCorrectAnswerBoxProps } from "./CorrectAnswerBox.mocks";

export default {
  title: "atoms/CorrectAnswerBox",
  component: CorrectAnswerBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CorrectAnswerBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CorrectAnswerBox> = (args) => (
  <CorrectAnswerBox {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCorrectAnswerBoxProps.base,
} as ICorrectAnswerBox;
