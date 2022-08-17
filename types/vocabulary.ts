export interface VocabularyDeck {
  deckId: string;
  deckName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type VocabularyDecks = Array<VocabularyDeck>;
