import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudySession, { IStudySession } from "./StudySession";
import { mockStudySessionProps } from "./StudySession.mocks";

export default {
  title: "molecules/StudySession",
  component: StudySession,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudySession>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudySession> = (args) => (
  <StudySession {...args} />
);

export const TextSession = Template.bind({});
export const Lesson = Template.bind({});
export const SpeakingSession = Template.bind({});
export const ListeningSession = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

TextSession.args = {
  ...mockStudySessionProps.textSession,
} as IStudySession;

Lesson.args = {
  ...mockStudySessionProps.lesson,
} as IStudySession;

SpeakingSession.args = {
  ...mockStudySessionProps.speakingSession,
} as IStudySession;

ListeningSession.args = {
  ...mockStudySessionProps.listeningSession,
} as IStudySession;
