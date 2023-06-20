import { action } from "@storybook/addon-actions";

import { INewVocabulary } from "./NewVocabulary";

const base: INewVocabulary = {
  lessonItemId: "123",
  onContinue: action("onContinue"),
  onMarkAsLearned: action("onMarkAsLearned"),
};

export const mockNewVocabularyProps = {
  base,
};
