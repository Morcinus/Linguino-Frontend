import { ComponentMeta, ComponentStory } from "@storybook/react";

import UnauthenticatedNavigationBar, {
  IUnauthenticatedNavigationBar,
} from "./UnauthenticatedNavigationBar";
import { mockUnauthenticatedNavigationBarProps } from "./UnauthenticatedNavigationBar.mocks";

export default {
  title: "templates/UnauthenticatedNavigationBar",
  component: UnauthenticatedNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UnauthenticatedNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnauthenticatedNavigationBar> = (
  args
) => <UnauthenticatedNavigationBar {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUnauthenticatedNavigationBarProps.base,
} as IUnauthenticatedNavigationBar;
