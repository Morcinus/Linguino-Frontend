import { action } from "@storybook/addon-actions";

import { INewGrammar } from "./NewGrammar";

const base: INewGrammar = {
  lessonId: "123",
  onContinue: action("onContinue"),
  onMarkAsLearned: action("onMarkAsLearned"),
};

export const mockNewGrammarProps = {
  base,
};
