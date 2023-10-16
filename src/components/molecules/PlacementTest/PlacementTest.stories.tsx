import { ComponentMeta, ComponentStory } from "@storybook/react";

import PlacementTest, { IPlacementTest } from "./PlacementTest";
import { mockPlacementTestProps } from "./PlacementTest.mocks";

export default {
  title: "molecules/PlacementTest",
  component: PlacementTest,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PlacementTest>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PlacementTest> = (args) => (
  <PlacementTest {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPlacementTestProps.base,
} as IPlacementTest;
