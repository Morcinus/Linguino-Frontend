import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import ShopPage, { IShopPage } from "./page";
import { mockShopPageProps } from "./page.mocks";

export default {
  title: "pages/ShopPage",
  component: ShopPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ShopPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShopPage> = (args) => (
  <Layout>
    <ShopPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockShopPageProps.base,
} as IShopPage;
