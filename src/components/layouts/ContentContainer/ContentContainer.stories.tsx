import { ComponentMeta, ComponentStory } from "@storybook/react";

import ContentContainer, { IContentContainer } from "./ContentContainer";
import { mockContentContainerProps } from "./ContentContainer.mocks";

export default {
  title: "templates/ContentContainer",
  component: ContentContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ContentContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentContainer> = (args) => (
  <ContentContainer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockContentContainerProps.base,
} as IContentContainer;
