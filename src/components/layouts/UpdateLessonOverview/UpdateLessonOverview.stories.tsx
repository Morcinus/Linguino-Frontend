import { ComponentMeta, ComponentStory } from "@storybook/react";

import UpdateLessonOverview, {
  IUpdateLessonOverview,
} from "./UpdateLessonOverview";
import { mockUpdateLessonOverviewProps } from "./UpdateLessonOverview.mocks";

export default {
  title: "layouts/UpdateLessonOverview",
  component: UpdateLessonOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UpdateLessonOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UpdateLessonOverview> = (args) => (
  <UpdateLessonOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUpdateLessonOverviewProps.base,
} as IUpdateLessonOverview;
