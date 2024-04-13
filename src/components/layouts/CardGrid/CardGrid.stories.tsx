import { ComponentMeta, ComponentStory } from "@storybook/react";

import CardGrid, { ICardGrid } from "./CardGrid";
import { mockCardGridProps } from "./CardGrid.mocks";

export default {
  title: "layouts/CardGrid",
  component: CardGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardGrid> = (args) => (
  <CardGrid {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardGridProps.base,
} as ICardGrid;
