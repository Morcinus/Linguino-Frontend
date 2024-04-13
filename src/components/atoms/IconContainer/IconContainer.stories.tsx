import { ComponentMeta, ComponentStory } from "@storybook/react";

import IconContainer, { IIconContainer } from "./IconContainer";
import { mockIconContainerProps } from "./IconContainer.mocks";

export default {
  title: "atoms/IconContainer",
  component: IconContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconContainer> = (args) => (
  <IconContainer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockIconContainerProps.base,
} as IIconContainer;
