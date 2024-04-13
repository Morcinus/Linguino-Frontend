import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import LessonsPage, { ILessonsPage } from "./page";
import { mockLessonsPageProps } from "./page.mocks";

export default {
  title: "pages/LessonsPage",
  component: LessonsPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonsPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonsPage> = (args) => (
  <Layout>
    <LessonsPage {...args} />
  </Layout>
);

export const Grammar = Template.bind({});
export const Vocabulary = Template.bind({});
export const Reading = Template.bind({});
export const Listening = Template.bind({});
export const Speaking = Template.bind({});
export const Pronunciation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Grammar.args = {
  ...mockLessonsPageProps.grammar,
} as ILessonsPage;

Vocabulary.args = {
  ...mockLessonsPageProps.vocabulary,
} as ILessonsPage;

Speaking.args = {
  ...mockLessonsPageProps.speaking,
} as ILessonsPage;

Listening.args = {
  ...mockLessonsPageProps.listening,
} as ILessonsPage;

Reading.args = {
  ...mockLessonsPageProps.reading,
} as ILessonsPage;

Pronunciation.args = {
  ...mockLessonsPageProps.pronunciation,
} as ILessonsPage;
