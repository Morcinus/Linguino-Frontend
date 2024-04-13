import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudySessionProgressBar, {
  IStudySessionProgressBar,
} from "./StudySessionProgressBar";
import { mockStudySessionProgressBarProps } from "./StudySessionProgressBar.mocks";

export default {
  title: "atoms/StudySessionProgressBar",
  component: StudySessionProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudySessionProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudySessionProgressBar> = (args) => (
  <StudySessionProgressBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStudySessionProgressBarProps.base,
} as IStudySessionProgressBar;
