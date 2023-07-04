import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudyPath, { IStudyPath } from "./StudyPath";
import { mockStudyPathProps } from "./StudyPath.mocks";

export default {
  title: "atoms/StudyPath",
  component: StudyPath,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudyPath>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudyPath> = (args) => (
  <StudyPath {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStudyPathProps.base,
} as IStudyPath;
