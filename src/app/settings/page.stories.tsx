import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import SettingsPage, { ISettingsPage } from "./page";
import { mockSettingsPageProps } from "./page.mocks";

export default {
  title: "templates/SettingsPage",
  component: SettingsPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SettingsPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SettingsPage> = (args) => (
  <Layout {...args}>
    <SettingsPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSettingsPageProps.base,
} as ISettingsPage;
