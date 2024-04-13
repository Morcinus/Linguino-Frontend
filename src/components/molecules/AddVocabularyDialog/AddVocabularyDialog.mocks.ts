import { action } from "@storybook/addon-actions";

import { IAddVocabularyDialog } from "./AddVocabularyDialog";

const base: IAddVocabularyDialog = {
  open: true,
  onItemAdd: action("onItemAdd"),
  onItemRemove: action("onItemRemove"),
  onClose: action("onClose"),
  items: [],
};

export const mockAddVocabularyDialogProps = {
  base,
};
