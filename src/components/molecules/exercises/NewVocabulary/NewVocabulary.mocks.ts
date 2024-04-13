import { action } from "@storybook/addon-actions";

import { INewVocabulary } from "./NewVocabulary";

const base: INewVocabulary = {
  courseId: "abc",
  lessonItemId: "123",
  onContinue: action("onContinue"),
};

export const mockNewVocabularyProps = {
  base,
};
