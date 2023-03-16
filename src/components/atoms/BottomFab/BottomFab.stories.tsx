import { ComponentMeta, ComponentStory } from "@storybook/react";

import BottomFab, { IBottomFab } from "./BottomFab";
import { mockBottomFabProps } from "./BottomFab.mocks";

export default {
  title: "atoms/BottomFab",
  component: BottomFab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BottomFab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomFab> = (args) => (
  <BottomFab {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBottomFabProps.base,
} as IBottomFab;
