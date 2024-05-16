import { ComponentMeta, ComponentStory } from "@storybook/react";

import FullscreenDialog, { IFullscreenDialog } from "./FullscreenDialog";
import { mockFullscreenDialogProps } from "./FullscreenDialog.mocks";

export default {
  title: "atoms/FullscreenDialog",
  component: FullscreenDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FullscreenDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullscreenDialog> = (args) => (
  <FullscreenDialog {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFullscreenDialogProps.base,
} as IFullscreenDialog;
