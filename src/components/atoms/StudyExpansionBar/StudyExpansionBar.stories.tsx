import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudyExpansionBar, { IStudyExpansionBar } from "./StudyExpansionBar";
import { mockStudyExpansionBarProps } from "./StudyExpansionBar.mocks";

export default {
  title: "atoms/StudyExpansionBar",
  component: StudyExpansionBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudyExpansionBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudyExpansionBar> = (args) => (
  <StudyExpansionBar {...args} />
);

export const Closed = Template.bind({});
export const Opened = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Closed.args = {
  ...mockStudyExpansionBarProps.closed,
} as IStudyExpansionBar;

Opened.args = {
  ...mockStudyExpansionBarProps.opened,
} as IStudyExpansionBar;
