import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import FavoritesPage, { IFavoritesPage } from "./page";
import { mockFavoritesPageProps } from "./page.mocks";

export default {
  title: "templates/FavoritesPage",
  component: FavoritesPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FavoritesPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavoritesPage> = (args) => (
  <Layout>
    <FavoritesPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFavoritesPageProps.base,
} as IFavoritesPage;
