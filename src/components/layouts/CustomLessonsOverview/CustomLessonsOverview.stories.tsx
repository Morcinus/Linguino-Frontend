import { ComponentMeta, ComponentStory } from "@storybook/react";

import CustomLessonsOverview, {
  ICustomLessonsOverview,
} from "./CustomLessonsOverview";
import { mockCustomLessonsOverviewProps } from "./CustomLessonsOverview.mocks";

export default {
  title: "layouts/CustomLessonsOverview",
  component: CustomLessonsOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CustomLessonsOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomLessonsOverview> = (args) => (
  <CustomLessonsOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCustomLessonsOverviewProps.base,
} as ICustomLessonsOverview;
