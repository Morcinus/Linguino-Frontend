import { ComponentMeta, ComponentStory } from "@storybook/react";

import MatchImageOption, { IMatchImageOption } from "./MatchImageOption";
import { mockMatchImageOptionProps } from "./MatchImageOption.mocks";

export default {
  title: "templates/MatchImageOption",
  component: MatchImageOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MatchImageOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MatchImageOption> = (args) => (
  <MatchImageOption {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMatchImageOptionProps.base,
} as IMatchImageOption;
