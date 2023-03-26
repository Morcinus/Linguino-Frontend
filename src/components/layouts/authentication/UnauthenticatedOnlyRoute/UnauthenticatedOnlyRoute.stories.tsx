import { ComponentMeta, ComponentStory } from "@storybook/react";

import UnauthenticatedOnlyRoute, {
  IUnauthenticatedOnlyRoute,
} from "./UnauthenticatedOnlyRoute";
import { mockUnauthenticatedOnlyRouteProps } from "./UnauthenticatedOnlyRoute.mocks";

export default {
  title: "templates/UnauthenticatedOnlyRoute",
  component: UnauthenticatedOnlyRoute,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UnauthenticatedOnlyRoute>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnauthenticatedOnlyRoute> = (args) => (
  <UnauthenticatedOnlyRoute {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUnauthenticatedOnlyRouteProps.base,
} as IUnauthenticatedOnlyRoute;
