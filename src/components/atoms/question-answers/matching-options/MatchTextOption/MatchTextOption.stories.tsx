import { ComponentMeta, ComponentStory } from "@storybook/react";

import MatchTextOption, { IMatchTextOption } from "./MatchTextOption";
import { mockMatchTextOptionProps } from "./MatchTextOption.mocks";

export default {
  title: "atoms/MatchTextOption",
  component: MatchTextOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MatchTextOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MatchTextOption> = (args) => (
  <MatchTextOption {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMatchTextOptionProps.base,
} as IMatchTextOption;
