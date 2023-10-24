import { action } from "@storybook/addon-actions";

import { INewGrammar } from "./NewGrammar";

const base: INewGrammar = {
  courseId: "123",
  lessonId: "123",
  onContinue: action("onContinue"),
};

export const mockNewGrammarProps = {
  base,
};
