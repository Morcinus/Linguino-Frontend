import { ComponentMeta, ComponentStory } from "@storybook/react";

import CalendarHeatmap, { ICalendarHeatmap } from "./CalendarHeatmap";
import { mockCalendarHeatmapProps } from "./CalendarHeatmap.mocks";

export default {
  title: "templates/CalendarHeatmap",
  component: CalendarHeatmap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CalendarHeatmap>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CalendarHeatmap> = (args) => (
  <CalendarHeatmap {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCalendarHeatmapProps.base,
} as ICalendarHeatmap;
