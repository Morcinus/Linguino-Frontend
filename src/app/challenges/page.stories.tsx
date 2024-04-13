import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import ChallengesPage, { IChallengesPage } from "./page";
import { mockChallengesPageProps } from "./page.mocks";

export default {
  title: "pages/ChallengesPage",
  component: ChallengesPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChallengesPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChallengesPage> = (args) => (
  <Layout {...args}>
    <ChallengesPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChallengesPageProps.base,
} as IChallengesPage;
