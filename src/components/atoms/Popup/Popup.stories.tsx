import { ComponentMeta, ComponentStory } from "@storybook/react";

import Popup, { IPopup } from "./Popup";
import { mockPopupProps } from "./Popup.mocks";

export default {
  title: "atoms/Popup",
  component: Popup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Popup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPopupProps.base,
} as IPopup;
