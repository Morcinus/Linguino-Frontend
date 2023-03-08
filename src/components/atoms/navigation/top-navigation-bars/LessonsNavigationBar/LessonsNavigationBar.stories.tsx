import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonsNavigationBar, {
  ILessonsNavigationBar,
} from "./LessonsNavigationBar";
import { mockLessonsNavigationBarProps } from "./LessonsNavigationBar.mocks";

export default {
  title: "atoms/navigation-bars/LessonsNavigationBar",
  component: LessonsNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonsNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonsNavigationBar> = (args) => (
  <LessonsNavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonsNavigationBarProps.base,
} as ILessonsNavigationBar;
