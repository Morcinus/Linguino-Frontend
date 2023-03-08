import { ComponentMeta, ComponentStory } from "@storybook/react";

import FavoritesOverview, { IFavoritesOverview } from "./FavoritesOverview";
import { mockFavoritesOverviewProps } from "./FavoritesOverview.mocks";

export default {
  title: "layouts/FavoritesOverview",
  component: FavoritesOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FavoritesOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavoritesOverview> = (args) => (
  <FavoritesOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFavoritesOverviewProps.base,
} as IFavoritesOverview;
