import { ComponentMeta, ComponentStory } from "@storybook/react";

import UserLessonsList, { IUserLessonsList } from "./UserLessonsList";
import { mockUserLessonsListProps } from "./UserLessonsList.mocks";

export default {
  title: "atoms/lists/UserLessonsList",
  component: UserLessonsList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserLessonsList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserLessonsList> = (args) => (
  <UserLessonsList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUserLessonsListProps.base,
} as IUserLessonsList;
