import { ComponentMeta, ComponentStory } from "@storybook/react";

import DrawerContainer, { IDrawerContainer } from "./DrawerContainer";
import { mockDrawerContainerProps } from "./DrawerContainer.mocks";

export default {
  title: "templates/DrawerContainer",
  component: DrawerContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DrawerContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DrawerContainer> = (args) => (
  <DrawerContainer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDrawerContainerProps.base,
} as IDrawerContainer;
