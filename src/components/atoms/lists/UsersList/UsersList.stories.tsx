import { ComponentMeta, ComponentStory } from "@storybook/react";

import UsersList, { IUsersList } from "./UsersList";
import { mockUsersListProps } from "./UsersList.mocks";

export default {
  title: "atoms/lists/UsersList",
  component: UsersList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UsersList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UsersList> = (args) => (
  <UsersList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUsersListProps.base,
} as IUsersList;
