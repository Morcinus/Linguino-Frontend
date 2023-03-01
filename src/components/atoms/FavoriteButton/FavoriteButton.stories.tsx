import { ComponentMeta, ComponentStory } from "@storybook/react";

import FavoriteButton, { IFavoriteButton } from "./FavoriteButton";
import { mockFavoriteButtonProps } from "./FavoriteButton.mocks";

export default {
  title: "atoms/FavoriteButton",
  component: FavoriteButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FavoriteButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavoriteButton> = (args) => (
  <FavoriteButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFavoriteButtonProps.base,
} as IFavoriteButton;
