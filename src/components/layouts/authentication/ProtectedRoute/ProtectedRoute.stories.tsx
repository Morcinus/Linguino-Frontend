import { ComponentMeta, ComponentStory } from "@storybook/react";

import ProtectedRoute, { IProtectedRoute } from "./ProtectedRoute";
import { mockProtectedRouteProps } from "./ProtectedRoute.mocks";

export default {
  title: "layouts/authentication/ProtectedRoute",
  component: ProtectedRoute,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProtectedRoute>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProtectedRoute> = (args) => (
  <ProtectedRoute {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProtectedRouteProps.base,
} as IProtectedRoute;
