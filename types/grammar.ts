export interface GrammarDeck {
  deckId: string;
  deckName: string;
  progress?: number;
  category?: string;
  learningOrder?: number;
}

export type GrammarDecks = Array<GrammarDeck>;
