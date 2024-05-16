import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import HelpPage, { IHelpPage } from "./page";
import { mockHelpPageProps } from "./page.mocks";

export default {
  title: "pages/HelpPage",
  component: HelpPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpPage> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <Layout>
      <HelpPage {...args} />
    </Layout>
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHelpPageProps.base,
} as IHelpPage;
