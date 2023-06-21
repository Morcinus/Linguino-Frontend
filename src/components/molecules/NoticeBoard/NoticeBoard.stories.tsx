import { ComponentMeta, ComponentStory } from "@storybook/react";

import NoticeBoard, { INoticeBoard } from "./NoticeBoard";
import { mockNoticeBoardProps } from "./NoticeBoard.mocks";

export default {
  title: "molecules/NoticeBoard",
  component: NoticeBoard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NoticeBoard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NoticeBoard> = (args) => (
  <NoticeBoard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNoticeBoardProps.base,
} as INoticeBoard;
