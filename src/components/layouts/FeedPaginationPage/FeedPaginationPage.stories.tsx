import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeedPaginationPage, { IFeedPaginationPage } from "./FeedPaginationPage";
import { mockFeedPaginationPageProps } from "./FeedPaginationPage.mocks";

export default {
  title: "layouts/FeedPaginationPage",
  component: FeedPaginationPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeedPaginationPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedPaginationPage> = (args) => (
  <FeedPaginationPage {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedPaginationPageProps.base,
} as IFeedPaginationPage;
