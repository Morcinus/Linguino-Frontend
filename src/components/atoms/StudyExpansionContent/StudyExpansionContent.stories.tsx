import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudyExpansionContent, {
  IStudyExpansionContent,
} from "./StudyExpansionContent";
import { mockStudyExpansionContentProps } from "./StudyExpansionContent.mocks";

export default {
  title: "atoms/StudyExpansionContent",
  component: StudyExpansionContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudyExpansionContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudyExpansionContent> = (args) => (
  <StudyExpansionContent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStudyExpansionContentProps.base,
} as IStudyExpansionContent;
