import { ComponentMeta, ComponentStory } from "@storybook/react";

import SimpleCircularProgress, {
  ISimpleCircularProgress,
} from "./SimpleCircularProgress";
import { mockSimpleCircularProgressProps } from "./SimpleCircularProgress.mocks";

export default {
  title: "atoms/SimpleCircularProgress",
  component: SimpleCircularProgress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SimpleCircularProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleCircularProgress> = (args) => (
  <SimpleCircularProgress {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSimpleCircularProgressProps.base,
} as ISimpleCircularProgress;
