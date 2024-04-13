import { ComponentMeta, ComponentStory } from "@storybook/react";

import MarkdownText, { IMarkdownText } from "./MarkdownText";
import { mockMarkdownTextProps } from "./MarkdownText.mocks";

export default {
  title: "templates/MarkdownText",
  component: MarkdownText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MarkdownText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MarkdownText> = (args) => (
  <MarkdownText {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMarkdownTextProps.base,
} as IMarkdownText;
