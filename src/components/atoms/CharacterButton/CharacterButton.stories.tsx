import { ComponentMeta, ComponentStory } from "@storybook/react";

import CharacterButton, { ICharacterButton } from "./CharacterButton";
import { mockCharacterButtonProps } from "./CharacterButton.mocks";

export default {
  title: "atoms/CharacterButton",
  component: CharacterButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CharacterButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CharacterButton> = (args) => (
  <CharacterButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCharacterButtonProps.base,
} as ICharacterButton;
