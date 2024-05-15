import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import ChangeEmailRequestPage, { IChangeEmailRequestPage } from "./page";
import { mockChangeEmailRequestPageProps } from "./page.mocks";

export default {
  title: "pages/ChangeEmailRequestPage",
  component: ChangeEmailRequestPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChangeEmailRequestPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChangeEmailRequestPage> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <Layout {...args}>
      <ChangeEmailRequestPage {...args} />
    </Layout>
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChangeEmailRequestPageProps.base,
} as IChangeEmailRequestPage;
