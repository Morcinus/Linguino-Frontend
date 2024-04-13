import { ComponentMeta, ComponentStory } from "@storybook/react";

import SimpleCardWide, { ISimpleCardWide } from "./SimpleCardWide";
import { mockSimpleCardWideProps } from "./SimpleCardWide.mocks";

export default {
  title: "atoms/cards/SimpleCardWide",
  component: SimpleCardWide,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SimpleCardWide>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleCardWide> = (args) => (
  <SimpleCardWide {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSimpleCardWideProps.base,
} as ISimpleCardWide;
