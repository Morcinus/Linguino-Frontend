export interface NewVocabulary {
  lessonItemId: ID;
  type: "NEW_VOCABULARY";
}

export interface NewGrammar {
  lessonId: ID;
  lessonItemIds: Array<ID>;
  type: "NEW_GRAMMAR";
}
