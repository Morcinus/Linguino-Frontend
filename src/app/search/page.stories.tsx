import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import SearchPagePage, { ISearchPagePage } from "./page";
import { mockSearchPagePageProps } from "./page.mocks";

export default {
  title: "pages/SearchPagePage",
  component: SearchPagePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchPagePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchPagePage> = (args) => (
  <Layout {...args}>
    <SearchPagePage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchPagePageProps.base,
} as ISearchPagePage;
